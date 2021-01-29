import json
import requests
from django.http import HttpResponse, JsonResponse
from management.models import availability, user, availability, client
from booking.models import service, provided_service, appointment
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime, timedelta

@csrf_exempt
def create_appointment(request):
    client = client.objects.get(id = request.POST['client_id'])
    # this should be an array later on
    provider = user.objects.get(id = request.POST['provider_id'])
    service = service.objects.get(id = request.POST['service_id'])
    client_note = request.POST['client_note']
    start_date = request.POST['start']
    end_date = start_date + timedelta(minutes=int(service.duration))
    # check if this appointment has been taken or if the provider has been booked within this time slot
    taken  = appointment.objects.select_for_update().filter(provider = provider, start_date__gte = start_date, end_date__lte = end_date)
    if taken:
        return HttpResponse('N/A')
    else:
        appointment.objects.create(
                                    provider = provider,
                                    client = client,
                                    client_note = client_note,
                                    start_date = start_date,
                                    end_date = end_date,
                                    service = service
        )
        return HttpResponse('OK')

@csrf_exempt
def get_services(request):
    services = service.objects.filter.values('name', 'duration', 'language', 'description')
    res = {}
    for service in services:
        if service['name'] in service.keys():
            res[service['name']] = res[service['name']]['language'] + [service['language']]
        else:
            info = {'duration' : service['duration'], 'description' : service['description'], 'language' : [service['language']]}
            res[service['name']]  = info
    return JsonResponse(res, safe=False)

@csrf_exempt
def get_calendar(request):
    now = datetime.now().replace(microsecond=0, second=0, minute=0)
    # closest 2 hours from now till 30 days after
    time_frame = (now+timedelta(hours=24), now.replace(hour=0)+timedelta(days=30))
    session = service.objects.get(id = request.GET['service_id'])
    session_duration = session.duration
    providers = provided_service.objects.filter(service = session).values_list('provider__id', flat = True)
    availabilities = availability.objects.filter(user__id__in = providers).values('user__id', 'week_day', 'start', 'end')
    availability_by_provider = {}
    current_time = time_frame[0]
    itr=False
    counter = 1
    booked_slots = {}
    booked = appointment.objects.filter(start_date__gte = time_frame[0], start_date__lte = time_frame[1]).values('provider__id', 'start_date', 'end_date')
    # get booking by provider by date by time
    for booking in booked:
        provider = booking['provider__id']
        date = booking['start_date'].date()
        res = (booking['start_date'].time(), booking['end_date'].time())
        if provider in booked_slots.keys():
            if(date in booked_slots[provider].keys()):
                booked_slots[provider][str(date)] = booked_slots[provider][str(date)] + [res]
            else:
                booked_slots[provider][str(date)] = [res]
        else:
            booked_slots[provider] = {}
            booked_slots[provider][str(date)] = [res]
    # get possible slots by provider by date by time
    while current_time < time_frame[1]:
        week_day = str(current_time.weekday() + 1)
        start = current_time
        end = current_time.replace(hour=0)+timedelta(days=1)
        for item in availabilities:
            if week_day == item['week_day']:
                shift_start = item['start']
                shift_end = item['end']
                if shift_start < start.time():
                    shift_start = start.time()
                while((datetime.combine(start.date(), shift_start) + timedelta(minutes=session_duration)).time() <= shift_end):
                    res = (shift_start, (datetime.combine(start.date(), shift_start) + timedelta(minutes=session_duration)).time())
                    if item['user__id'] in availability_by_provider.keys():
                        if str(start.date()) in availability_by_provider[item['user__id']].keys():
                            availability_by_provider[item['user__id']][str(start.date())] =  availability_by_provider[item['user__id']][str(start.date())] + [res]
                        else:
                            availability_by_provider[item['user__id']][str(start.date())] = [res]
                    else:
                        availability_by_provider[item['user__id']] = {}
                        availability_by_provider[item['user__id']][str(start.date())] = [res]
                    shift_start = (datetime.combine(start.date(), shift_start) + timedelta(minutes=session_duration)).time()
        if not itr:
            current_time = current_time.replace(hour=0)
            itr = True
        current_time += timedelta(days=1)
    
    # delete confilicting bookings
    res = {}
    for provider in availability_by_provider.keys():
        for date in availability_by_provider[provider].keys():
            if date not in res.keys():
                res[date] = {}
            for available_slot in availability_by_provider[provider][date]:
                taken = False
                if(provider in booked_slots.keys()):
                    if(date in booked_slots[provider].keys()):
                        for booked_slot in booked_slots[provider][date]:
                            if(__timeConfilct(booked_slot, available_slot)):
                                taken = True
                if not taken:
                    if str(available_slot[0]) in res[date].keys():
                        res[date][str(available_slot[0])] = res[date][str(available_slot[0])] + [provider]
                    else:
                         res[date][str(available_slot[0])] = [provider]
    return JsonResponse(res, safe=False)

def __timeConfilct(booked, available):
    for first_interval, second_interval in [(booked,available), (available, booked)]:
        if (first_interval[0] < second_interval[0] < first_interval[1]) or (first_interval[0] < second_interval[1] < first_interval[1]):
            return True
    return False
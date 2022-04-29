import json
import requests
from django.http import HttpResponse, JsonResponse
from management.models import user, user_info, availability, client
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_user(request):
    data = json.loads(request.POST['signup_form'])
    info = user_info.objects.create(email = data["email"], phone = data["phone"], doxy_link = data["doxy_link"])
    user = user.objects.create(first_name = data["first_name"], last_name = data["last_name"], role = 2, user_info = info)
    return HttpResponse('OK')

@csrf_exempt
def get_user(request):
    user = user.objects.get(email = request.POST['email']).values('first_name', 'last_name', 'role', 'user_info__doxy_link')
    user['doxy_link'] = user.pop['user_info__doxy_link']
    return JsonResponse(user, safe=False)

@csrf_exempt
def set_schedule(request):
    user = user.objects.get(id = request.POST['user_id'])
    sched = json.loads(request.POST['schedule'])
    current_availability = availability.objects.filter(user = user, deleted = False)
    # Delete Previous Availability
    for item in current_availability:
        item.deleted = True
        item.save()
    # set new availability
    for item in sched:
        availability.objects.create(
                                    user = user, 
                                    week_day = item['week_day'], 
                                    start = item['start'], 
                                    end = item['end'], 
                                    deleted = False
                                    )
    return HttpResponse('OK')

@csrf_exempt
def get_schedule(request):
    user = user.objects.get(id = request.GET['user_id'])
    current_availability = availability.objects.filter(user = user, deleted = False).values('week_day', 'start', 'end')
    res = {}
    for item in current_availability:
        slot = {'start' : item['start'], 'end' : item['end'] }
        week_day = item['week_day']
        if week_day in res.keys():
            res[week_day] = res[week_day].append(slot)
        else:
            res[week_day] = [slot]
    return JsonResponse(res, safe=False)
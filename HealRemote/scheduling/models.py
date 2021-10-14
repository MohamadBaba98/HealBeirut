from django.db import models
from django.contrib.auth.models import User


class Appointment(models.Model):
    provider = models.ForeignKey(User, on_delete=models.CASCADE, related_name='provider')
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient')

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    reason_for_visit = models.CharField(max_length=500, default='')


class Availability(models.Model):
    provider = models.ForeignKey(User, on_delete=models.CASCADE)

    # How do we want to store availability? Depends on UI
    #   Days of week x hours for those days?
    #   Exceptions - list of dates(/times?) when unavailable for things like vacation or whatever
    #   start_date + end_date (inclusive)
    #  or maybe start_date, end_date, start_time, end_time, dates_available)

    # preferences?
    #   duration, time_between_appointments




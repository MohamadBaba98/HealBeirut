"""HealBeirut URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from management.views.user import create_user, get_user, get_schedule, set_schedule
from booking.views.calendar import get_calendar, create_appointment, get_services
urlpatterns = [
    path('admin/', admin.site.urls),
]

# User Management
urlpatterns += [
    path('createUser/', create_user, name="Create User"),
    path('getUser/', get_user, name="Get User"),
    path('setSchedule/', set_schedule, name="Set Schedule"),
    path('getSchedule/', get_schedule, name="Get Schedule")
]

# Booking
urlpatterns += [
    path('createAppointment/', create_appointment, name="Create Appointment"),
    path('getServices/', get_services, name="Get Services"),
    path('getCalendar/', get_calendar, name="Get Calendar")
]
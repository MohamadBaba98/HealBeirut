from django.contrib import admin
from django import forms
from . import models

class serviceAdminForm(forms.ModelForm):
    class Meta:
        model = models.service
        fields = "__all__"

class serviceAdmin(admin.ModelAdmin):
    form = serviceAdminForm
    list_display = [
        "name",
        "duration",
        "language",
        "description",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

class provided_serviceAdminForm(forms.ModelForm):
    class Meta:
        model = models.provided_service
        fields = "__all__"

class provided_serviceAdmin(admin.ModelAdmin):
    form = provided_serviceAdminForm
    list_display = [
        "provider",
        "service",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

class appointmentAdminForm(forms.ModelForm):
    class Meta:
        model = models.appointment
        fields = "__all__"

class appointmentAdmin(admin.ModelAdmin):
    form = appointmentAdminForm
    list_display = [
        "provider",
        "client",
        "service",
        "start_date",
        "end_date",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

admin.site.register(models.service, serviceAdmin)
admin.site.register(models.provided_service, provided_serviceAdmin)
admin.site.register(models.appointment, appointmentAdmin)
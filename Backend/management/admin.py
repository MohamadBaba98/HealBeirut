from django.contrib import admin
from django import forms
from . import models

class userAdminForm(forms.ModelForm):
    class Meta:
        model = models.user
        fields = "__all__"

class userAdmin(admin.ModelAdmin):
    form = userAdminForm
    list_display = [
        "first_name",
        "last_name",
        "role",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

class user_infoAdminForm(forms.ModelForm):
    class Meta:
        model = models.user_info
        fields = "__all__"

class user_infoAdmin(admin.ModelAdmin):
    form = user_infoAdminForm
    list_display = [
        "email",
        "phone",
        "doxy_link",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

class availabilityAdminForm(forms.ModelForm):
    class Meta:
        model = models.availability
        fields = "__all__"

class availabilityAdmin(admin.ModelAdmin):
    form = availabilityAdminForm
    list_display = [
        "user",
        "week_day",
        "start",
        "end",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

class clientAdminForm(forms.ModelForm):
    class Meta:
        model = models.client
        fields = "__all__"

class clientAdmin(admin.ModelAdmin):
    form = clientAdminForm
    list_display = [
        "first_name",
        "last_name",
        "email",
        "phone",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]

admin.site.register(models.user, userAdmin)
admin.site.register(models.availability, availabilityAdmin)
admin.site.register(models.user_info, user_infoAdmin)
admin.site.register(models.client, clientAdmin)
from django.db import models

class service(models.Model):
    language_choices = (('1', 'Arabic'), ('2', 'English'), ('3', 'French'))
    name = models.CharField(max_length=500)
    duration = models.IntegerField()
    language =  models.CharField(max_length=15, choices=language_choices)
    description = models.TextField(max_length=254)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return '%s (%s)' % (self.name, self.language)

class provided_service(models.Model):
    provider = models.ForeignKey("management.user", on_delete=models.CASCADE)
    service = models.ForeignKey("booking.service", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return '%s (%s)' % (self.provider ,self.service.name)

class appointment(models.Model):
    provider = models.ForeignKey("management.user", on_delete=models.CASCADE)
    client = models.ForeignKey("management.client", on_delete=models.CASCADE)
    service = models.ForeignKey("booking.service", on_delete=models.CASCADE)
    start_date = models.DateTimeField(editable=True)
    end_date = models.DateTimeField(editable=True)
    client_note = models.TextField(max_length=254, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return '%s - %s - %s' % (self.provider, self.client, self.service)
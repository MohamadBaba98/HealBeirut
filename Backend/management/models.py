from django.db import models

class user(models.Model):
    role_choices = (('1', 'Admin'), ('2', 'Provider'))
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role =  models.CharField(max_length=15, choices=role_choices)
    user_info = models.ForeignKey("management.user_info", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return str(self.first_name + " " + self.last_name)

class user_info(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    phone = models.CharField(max_length=50, unique=True)
    doxy_link = models.URLField(max_length=254, unique=True, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return str(self.email)

class availability(models.Model):
    week_day_choices = ( ('1', 'Monday'),('2', 'Tuesday'), ('3', 'Wednesday'), ('4', 'Thursday'), ('5', 'Friday'), ('6', 'Saturday'), ('7', 'Sunday') )
    user = models.ForeignKey("management.user", on_delete=models.CASCADE)
    week_day = models.CharField(max_length=15, choices=week_day_choices)
    start = models.TimeField(null = False)
    end = models.TimeField(null = False)
    deleted = models.BooleanField(default = True)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return '%s %s - %s' % (self.week_day, self.start, self.end)

class client(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    def __str__(self):
        return str(self.first_name + " " + self.last_name)
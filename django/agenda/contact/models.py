from django.db import models
from datetime import date
# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=True, null=False)
    phone = models.CharField(max_length=11, blank=True, null=True)
    mobile = models.CharField(max_length=11, blank=False, null=False)
    email = models.EmailField()
    company = models.CharField(max_length=50, blank=True, null=True)
    date = models.DateField(default=date.today)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

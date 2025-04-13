from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Restaurant(models.Model):
    # relación uno a uno
    place = models.OneToOneField(Place, on_delete=models.CASCADE, primary_key=True)
    numerOfEmployees = models.IntegerField(default=1)
    def __str__(self):
        return self.place.name
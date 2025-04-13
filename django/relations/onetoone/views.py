from django.http import HttpResponse
from django.shortcuts import render
from .models import Place, Restaurant
# Create your views here.

def create(request):
    place = Place(name="lugar 1", address=" direccion 1")
    place.save()

    restaurant = Restaurant(place=place, numerOfEmployees=10)
    restaurant.save()

    return HttpResponse(restaurant.place.name)


from django.http import HttpResponse
from django.shortcuts import render

def test(request):
    return HttpResponse("Funciona correctamente")
def create(request):
    return HttpResponse("ruta para probar la creaciuon de modelos")
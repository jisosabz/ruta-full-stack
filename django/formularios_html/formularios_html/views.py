from django.http import HttpResponse
from django.shortcuts import render


def form(request):
    return render(request, 'form.html', {

    })

def goal(request):
    if request.method != "GET":
        return HttpResponse("El método post no esta soportado")
    else:
        name = request.GET['name']
        return render(request, 'succes.html', {'name': name})

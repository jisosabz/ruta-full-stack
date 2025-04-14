from django.http import HttpResponse
from django.shortcuts import render


def get_form(request):
    return render(request, 'form.html', {})

def get_goal(request):
    if request.method != "GET":
        return HttpResponse("El método post no esta soportado")
    else:
        name = request.GET['name']
        return render(request, 'succes.html', {'name': name})

def post_form(request):
    return render(request, "postform.html", {})

def post_goal(request):
    if request.method != "POST":
        return HttpResponse("No se admite este método")
    else:
        info = request.POST['name']
        return render(request, "postsucces.html",{
            'info': info,
        })
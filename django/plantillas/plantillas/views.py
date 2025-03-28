from django.shortcuts import render
def simple(request):
    #tiene como parametros la request, la plantilla a cargar, contexto
    return render(request, "simple.html",{})
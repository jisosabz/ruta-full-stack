from django.shortcuts import render


def herencia(request):
    return render(request, 'herencia.html',{})
def ejemploUno(request):
    return render(request, 'ejemploUno.html',{})
def ejemploDos(request):
    return render(request, 'ejemploDos.html',{})
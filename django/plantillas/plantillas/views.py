from django.shortcuts import render
def simple(request):
    #tiene como parametros la request, la plantilla a cargar, contexto
    return render(request, "simple.html",{})
def dinamico(request, name):
    categories = ['code', 'design', 'marketing']
    context = {'name': name, 'categories': categories}
    return render(request, "dinamico.html",context)
    #como contexto tambien se puede pasar varias cosas como objetos y demás
from django.shortcuts import render
from sqlparse.utils import offset

from .models import Author, Entry
def queries(request):
    #obtener todos los elementos de un objeto
    authors = Author.objects.all()
    #obtener los datos filtrados por condición
    filtered = Author.objects.filter(email="scott91@example.com")
    #obtener un unico objeto
    author = Author.objects.get(id=15)
    #obtener los primeros n valores (en este caso 10)
    limit = Author.objects.all()[:10]
    #de 10 elemento va saltar 5 y mostrar el resto
    offsets = Author.objects.all()[5:10]
    #ordenar
    orders = Author.objects.all().order_by('name')[30:50]
    #ordenar todos los elementos cuyo id sea meor o igual a 15
    """
    __lte = menor o igual
    __gte = mayor o igual
    __it = menor que
    __gt = mayor que
    __contains = contiene
    __exact = exacto
    """
    filtered2 = Author.objects.all().filter(id__lte= 15)
    #filtar todos los email que en su nombre contenga la palabra be
    contienen = Author.objects.all().filter(name__icontains="be")


    return render(request, 'post/queries.html', {
        'authors': authors,
        'filtered': filtered,
        'author': author,
        'limit': limit,
        'offsets': offsets,
        'orders': orders,
        'filtered2': filtered2,
        'contienen': contienen,
    })

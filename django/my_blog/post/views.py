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
    return render(request, 'post/queries.html', {
        'authors': authors,
        'filtered': filtered,
        'author': author,
        'limit': limit,
        'offsets': offsets,
    })

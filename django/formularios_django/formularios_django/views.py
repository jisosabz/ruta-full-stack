from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

from .forms import CommentForm, ContacForm

def form(request):
    commentForm = CommentForm({'name': 'Iván', 'email': 'ivanosabz@gmail.com', 'message': 'comentario'})
    return render(request, 'form.html', {
        'commentForm': commentForm,
    })
def goal(request):
    if request.method != "GET":
        return HttpResponse("No permitido")
    else:
        return HttpResponse(request.GET['name'])
def widget(request):
    if request.method == "GET":
        contactForm = ContacForm()
        return render(request, 'widget.html', {'contactForm': contactForm,})
    if request.method == "POST":
        form = ContacForm(request.POST)
        if form.is_valid():
            return HttpResponse('Valido')
        else:
            return render(request, 'widget.html', {'contactForm': form,})
from django.http import HttpResponse
from django.shortcuts import render

from .forms import CommentForm, ContacForm

def form(request):
    commentForm = CommentForm()
    return render(request, 'form.html', {
        'commentForm': commentForm,
    })
def goal(request):
    if request.method != "GET":
        return HttpResponse("No permitido")
    else:
        return HttpResponse(request.GET['name'])
def widget(request):
    contactForm = ContacForm()
    return render(request,'widget.html',{
        'contactForm': contactForm,
    })
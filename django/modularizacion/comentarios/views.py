from django.http import HttpResponse
from django.shortcuts import render
from django.template.defaulttags import comment

from .models import Comment
def test(request):
    return HttpResponse("Funciona correctamente")
def create(request):
    comment = Comment(name="Iván",score = 5, comment = "este es un comentario")
    comment.save()
    # tambien se puede hacer de la siguiente manera
    # comment = Comment.objects.create(name="Iván", score=5, comment = "este es un comentario")
    return HttpResponse("ruta para probar la creaciuon de modelos")

def delete(request):
    # primero buscamos lo que vamos a eliminar
    comment = Comment.objects.get(id=2)
    comment.delete()
    return HttpResponse("ruta para probar la eliminacion")
    #tambien se puede eliminar de esta manera
    #Comment.objects.get(id=2).delete()
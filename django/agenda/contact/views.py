from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Contact
from .forms import ContactForm
from django.contrib import messages


# Create your views here.
def index(request):
    contacts = Contact.objects.filter(name__contains = request.GET.get('search', ''))
    return render(request, 'contact/index.html',{
        'contacts': contacts,
    })

def view(request, id):
    contact = Contact.objects.get(id=id)
    return render(request, 'contact/details.html', {
        'contact': contact,
    })

def edit(request, id):
    contact = Contact.objects.get(id=id)
    if request.method == 'GET':
        form = ContactForm(instance=contact)
        context = {
            'form': form,
            'id': id,
        }
        return render(request, 'contact/edit.html',context)
    elif request.method == 'POST':
        form = ContactForm(request.POST, instance=contact)
        form.save()
        context = {
            'form': form,
            'id': id,
        }
        messages.success(request, 'Contacto Actualizado Correctamente')
        return render(request, "contact/edit.html", context)
    else:
        return None

def create(request):
    if request.method == 'GET':
        form = ContactForm()
        context = {
            'form': form,
        }
        return render(request, "contact/create.html", context)
    elif request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('contact')
    else:
        return None


def delete(request, id):
    contact = Contact.objects.get(id=id)
    contact.delete()
    return redirect('contact')
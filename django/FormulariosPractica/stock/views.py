from django.http import HttpResponse
from django.shortcuts import render
from .forms import ProductForm

# Create your views here.
def index(request):
    form = ProductForm()
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'index.html', {
                'form': form,
            })
    else:
        return render(request, 'index.html', {
            'form': form,
        })

from django.contrib import admin
from django.urls import path

from holamundo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('saludo/',views.saludo, name='saludo'),
    path('despedida/',views.despedida, name='despedida')
]

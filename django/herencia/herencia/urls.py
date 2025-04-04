
from django.contrib import admin
from django.urls import path

from herencia import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('herencia/',views.herencia,name='herencia'),
    path('ejemploUno/',views.ejemploUno,name='ejemploUno'),
    path('ejemploDos/',views.ejemploDos,name='ejemploDos'),
]

# 11:42

from django.contrib import admin
from django.urls import path

from plantillas import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('simple/',views.simple,name='simple'),
    path('dinamico/<str:name>',views.dinamico,name='dinamico'),
]

from django.contrib import admin
from django.urls import path

from manytoone import views

urlpatterns = [
    path('create/', views.create, name='create'),
]
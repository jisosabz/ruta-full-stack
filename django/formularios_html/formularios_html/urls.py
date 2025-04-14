
from django.contrib import admin
from formularios_html import views
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('form/', views.form, name='form'),
    path('goal/', views.goal, name='goal'),
]

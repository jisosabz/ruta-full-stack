
from django.urls import path
from post import views

urlpatterns = [
    path('queries/',views.queries, name='queries'),
    path('update/',views.update, name='update'),

]

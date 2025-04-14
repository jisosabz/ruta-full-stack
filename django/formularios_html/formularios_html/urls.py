
from django.contrib import admin
from formularios_html import views
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('get/form/', views.get_form, name='form'),
    path('get/goal/', views.get_goal, name='goal'),
    path('post/form/',views.post_form, name='postform'),
    path('post/goal/',views.post_goal, name='postgoal'),
]

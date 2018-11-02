from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('runslotmachine', views.run_slot_machine, name='index')
    ]
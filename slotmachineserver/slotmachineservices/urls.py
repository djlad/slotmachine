from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('runslotmachine', views.run_slot_machine, name='runmachine'),
    path('login', views.login, name="login"),
    path('signup',views.sign_up, name="signup")
    ]
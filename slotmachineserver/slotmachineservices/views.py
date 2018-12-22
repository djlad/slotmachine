from django.http import HttpResponse
from django.shortcuts import render
import json

from .user_management import usermanager as usermanager

# Create your views here.
def index(request):
    return HttpResponse("index pages is good ")

def run_slot_machine(request):
    response = {
        "result":[1,2,3]
    }
    data = json.dumps(response)
    return HttpResponse(data, content_type='application/json') 

def login(request):
    response = {
        "token":"thisisatoken"
    }
    data = json.dumps(response)
    return HttpResponse(data, content_type='application/json')

def sign_up(request):
    print(request)
    um = usermanager.UserManager()
    um.save_user("username", "password", "a@b.com", "joe", "bo")
    response = {
        "error":"none"
    }
    data = json.dumps(response)
    return HttpResponse(data, content_type='application/json')

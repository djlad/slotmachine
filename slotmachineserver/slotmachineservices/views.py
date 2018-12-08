from django.http import HttpResponse
from django.shortcuts import render
import json

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

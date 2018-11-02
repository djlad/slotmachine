from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("index pages is good ")

def run_slot_machine(request):
    return HttpResponse("running slot machine")

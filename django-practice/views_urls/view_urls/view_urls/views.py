
from django.shortcuts import render

def home(request):
    return render(request,"index.html") ## import render  meas the template wil be imported

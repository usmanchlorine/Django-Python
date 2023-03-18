from django.shortcuts import render,redirect
from .models import taskDb
from .forms import taskform
from  django.contrib import messages
def home(request):

    # all_items=taskDb.objects.all()
    if request.method == 'POST':
        form = taskform(request.POST or None)
        if form.is_valid():
            form.save()
            all_items=taskDb.objects.all()

            messages.success(request,('new item added'))
            return render(request,'index.html',{'all_items':all_items})
   
    else:
        all_items=taskDb.objects.all()
    
        return render(request,'index.html',{'all_items':all_items})


def delete(request,list_id):
    item=taskDb.objects.get(pk=list_id) ## primary key  list_id 
    item.delete()
    messages.success(request,"item has been deleted")
    return redirect('home')
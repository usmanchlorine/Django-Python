from  django import  forms
from .models import taskDb

class taskform(forms.ModelForm):
    class Meta:
        model = taskDb
        fields=['task','priority']
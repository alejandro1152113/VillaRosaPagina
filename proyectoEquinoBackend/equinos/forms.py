# equinos/forms.py
from django import forms
from .models import Equino

class EquinoForm(forms.ModelForm):
    class Meta:
        model = Equino
        fields = ['nombre', 'edad', 'precio', 'raza', 'genero', 'foto']
        widgets = {
            'nombre': forms.TextInput(attrs={'class': 'form-control'}),
            'edad': forms.NumberInput(attrs={'class': 'form-control'}),
            'precio': forms.NumberInput(attrs={'class': 'form-control'}),
            'raza': forms.Select(attrs={'class': 'form-control'}),
            'genero': forms.Select(attrs={'class': 'form-control'}),
            'foto': forms.ClearableFileInput(attrs={'class': 'form-control-file'}),
        }
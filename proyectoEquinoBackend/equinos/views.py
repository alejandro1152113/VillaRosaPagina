from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Equino
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from .models import Equino

def equinos_api(request):
    equinos = Equino.objects.all().values('nombre', 'edad', 'raza', 'foto')  # agrega los campos que desees
    equinos_list = list(equinos)
    return JsonResponse({'equinos': equinos_list})

class EquinoListView(ListView):
    model = Equino
    template_name = 'equinos/equino_list.html'
    context_object_name = 'equinos'

class EquinoCreateView(LoginRequiredMixin, CreateView):
    model = Equino
    fields = ['nombre', 'edad', 'precio', 'foto']
    template_name = 'equinos/equino_form.html'
    success_url = reverse_lazy('equino_list')

class EquinoUpdateView(LoginRequiredMixin, UpdateView):
    model = Equino
    fields = ['nombre', 'edad', 'precio', 'foto']
    template_name = 'equinos/equino_form.html'
    success_url = reverse_lazy('equino_list')

class EquinoDeleteView(LoginRequiredMixin, DeleteView):
    model = Equino
    template_name = 'equinos/equino_confirm_delete.html'
    success_url = reverse_lazy('equino_list')

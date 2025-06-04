from django.shortcuts import render
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import Equino
from django.urls import reverse_lazy
from .forms import EquinoForm

class EquinoCreateView(CreateView):
    model = Equino
    fields = ['nombre', 'edad', 'precio', 'raza', 'genero', 'foto']
    template_name = 'equinos/equino_form.html'  # o la que uses
    success_url = reverse_lazy('equino_list')

class EquinoListView(ListView):
    model = Equino
    template_name = 'equinos/equino_lista.html'  # El archivo que acabamos de crear
    context_object_name = 'equinos'

    def get_queryset(self):
        query = self.request.GET.get('q', '')
        if query:
            return Equino.objects.filter(nombre__icontains=query)
        return Equino.objects.all()

# Vista para actualizar un equino
class EquinoUpdateView(UpdateView):
    model = Equino
    form_class = EquinoForm
    template_name = 'equinos/equino_form.html'
    success_url = reverse_lazy('equino_list')

# Vista para eliminar un equino
class EquinoDeleteView(DeleteView):
    model = Equino
    template_name = 'equinos/equino_confirm_delete.html'
    success_url = reverse_lazy('equino_list')


def pagina_equinos(request):
    equinos = Equino.objects.all()
    return render(request, 'equinos/equinos.html', {'equinos': equinos})

def lista_equinos(request):
    equinos = Equino.objects.all()
    return render(request, 'equinos.html', {'equinos': equinos})
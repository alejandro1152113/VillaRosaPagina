from django.urls import path
from .views import EquinoListView, EquinoCreateView, EquinoUpdateView, EquinoDeleteView
from . import views
from django.http import HttpResponse

def equino_buscar(request):
    # Implement your search logic here
    return HttpResponse("Buscar equino")

urlpatterns = [
    path('', views.EquinoListView.as_view(), name='equino_list'),  # página principal para listar equinos
    path('nuevo/', EquinoCreateView.as_view(), name='equino_nuevo'),
    path('lista/', EquinoListView.as_view(), name='lista_equinos'),  # posiblemente duplicado con la anterior
    path('pagina_equinos/', views.pagina_equinos, name='pagina_equinos'),
    path('buscar/', equino_buscar, name='equino_buscar'),
    path('actualizar/<int:pk>/', EquinoUpdateView.as_view(), name='equino_actualizar'),
    path('eliminar/<int:pk>/', EquinoDeleteView.as_view(), name='equino_eliminar'),
]
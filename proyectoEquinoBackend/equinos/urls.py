from django.urls import path
from .views import EquinoListView, EquinoCreateView, EquinoUpdateView, EquinoDeleteView

urlpatterns = [
    path('', EquinoListView.as_view(), name='equino_list'),
    path('nuevo/', EquinoCreateView.as_view(), name='equino_nuevo'),
    path('editar/<int:pk>/', EquinoUpdateView.as_view(), name='equino_editar'),
    path('borrar/<int:pk>/', EquinoDeleteView.as_view(), name='equino_borrar'),
]

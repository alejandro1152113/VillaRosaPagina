from django.urls import path
from . import views

urlpatterns = [
    path('', views.EquinoListView.as_view(), name='equino_list'),           # Lista equinos
    path('nuevo/', views.EquinoCreateView.as_view(), name='equino_create'),  # Crear nuevo
    path('editar/<int:pk>/', views.EquinoUpdateView.as_view(), name='equino_editar'),
    path('borrar/<int:pk>/', views.EquinoDeleteView.as_view(), name='equino_borrar'),
    path('<int:pk>/', views.EquinoDetailView.as_view(), name='equino_detail'), # Detalle
]

from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.urls import path
from django.http import JsonResponse

def equinos_api(request):
    # Example implementation, replace with your actual logic
    data = {"message": "Equinos API endpoint"}
    return JsonResponse(data)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('equinos/', include('equinos.urls')),

    # Rutas de login y logout
    path('accounts/login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),

    path('api/equinos/', equinos_api, name='equinos_api'),
]

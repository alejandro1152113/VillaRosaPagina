from django.urls import path, include
from django.contrib import admin
from equinos.views import EquinoListView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', EquinoListView.as_view(), name='equino_list'),  # raíz a lista
    path('equinos/', include('equinos.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

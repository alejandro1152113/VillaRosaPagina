from rest_framework.routers import DefaultRouter
from .api_views import EquinoViewSet

router = DefaultRouter()
router.register(r'equinos', EquinoViewSet)

urlpatterns = router.urls

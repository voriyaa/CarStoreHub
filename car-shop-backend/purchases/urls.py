from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import PurchaseViewSet

router = SimpleRouter()
router.register(r'purchases', PurchaseViewSet, basename='purchase')

urlpatterns = [
    path('', include(router.urls)),
]

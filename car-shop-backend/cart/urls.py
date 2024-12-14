from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import CartItemViewSet

router = SimpleRouter()
router.register(r'cart', CartItemViewSet, basename='cartitem')

urlpatterns = [
    path('', include(router.urls)),
]

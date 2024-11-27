from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartItemViewSet

router = DefaultRouter()
router.register(r'cart', CartItemViewSet, basename='cartitem')

urlpatterns = [
    path('', include(router.urls)),
]

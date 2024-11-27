from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompareViewSet

router = DefaultRouter()
router.register(r'compare', CompareViewSet, basename='compareitem')

urlpatterns = [
    path('', include(router.urls)),
]

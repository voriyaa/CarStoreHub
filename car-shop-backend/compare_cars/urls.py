from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import CompareViewSet

router = SimpleRouter()
router.register(r'compare', CompareViewSet, basename='compareitem')

urlpatterns = [
    path('', include(router.urls)),
]

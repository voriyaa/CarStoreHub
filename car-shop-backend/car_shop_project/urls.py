from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('cars.urls')),
    path('api/', include('cart.urls')),
    path('api/', include('purchases.urls')),
    path('api/', include('compare_cars.urls')),
    path('api/users/', include('users.urls')),
]

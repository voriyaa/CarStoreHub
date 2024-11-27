from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from .models import Car
from .serializers import CarSerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['name']

    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get('search', None)
        model = self.request.query_params.get('model', None)
        year = self.request.query_params.get('year', None)
        price_min = self.request.query_params.get('price_min', None)
        price_max = self.request.query_params.get('price_max', None)
        brands = self.request.query_params.get('brands', None)

        if search:
            queryset = queryset.filter(name__icontains=search)

        if model:
            queryset = queryset.filter(name__icontains=model)

        if year:
            queryset = queryset.filter(year=year)

        if price_min and price_max:
            queryset = queryset.filter(price__gte=price_min, price__lte=price_max)

        if brands:
            brand_list = brands.split(',')
            brand_query = Q()
            for brand in brand_list:
                brand_query |= Q(name__icontains=brand)
            queryset = queryset.filter(brand_query)

        return queryset

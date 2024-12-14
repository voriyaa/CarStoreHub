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
        query_params = self.request.query_params

        filters = Q()

        conditions = {
            'name__icontains': query_params.get('search'),
            'year': query_params.get('year'),
            'price__gte': query_params.get('price_min'),
            'price__lte': query_params.get('price_max')
        }

        filters &= Q(**{k: v for k, v in conditions.items() if v})

        if brands := query_params.get('brands'):
            brand_query = Q()
            for brand in brands.split(','):
                brand_query |= Q(name__icontains=brand)
            filters &= brand_query

        return queryset.filter(filters)

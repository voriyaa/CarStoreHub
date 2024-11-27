from rest_framework import serializers
from .models import CompareItem
from cars.serializers import CarSerializer


class CompareItemSerializer(serializers.ModelSerializer):
    car = CarSerializer()

    class Meta:
        model = CompareItem
        fields = ['car', 'added_at']

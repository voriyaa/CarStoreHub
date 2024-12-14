from rest_framework import serializers
from .models import Purchase
from cars.serializers import CarSerializer


class PurchaseSerializer(serializers.ModelSerializer):
    car = CarSerializer(read_only=True)

    class Meta:
        model = Purchase
        fields = ['car', 'purchase_date', 'quantity']

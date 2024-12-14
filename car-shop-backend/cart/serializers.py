from rest_framework import serializers
from .models import CartItem
from cars.serializers import CarSerializer


class CartItemSerializer(serializers.ModelSerializer):
    car = CarSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['car', 'quantity']

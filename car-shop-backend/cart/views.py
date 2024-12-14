from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import CartItem
from .serializers import CartItemSerializer
from cars.models import Car


class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['post'], url_path='add')
    def add_to_cart(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            car = Car.objects.get(id=car_id)
        except Car.DoesNotExist:
            return Response({"error": "Car does not exist."}, status=status.HTTP_404_NOT_FOUND)

        cart_item, created = CartItem.objects.get_or_create(user=request.user, car=car)
        if not created:
            cart_item.quantity += 1
            cart_item.save()

        return Response(CartItemSerializer(cart_item).data,
                        status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

    @action(detail=False, methods=['patch'], url_path='increase')
    def increase_quantity(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = CartItem.objects.get(user=request.user, car_id=car_id)
        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)

        cart_item.quantity += 1
        cart_item.save()
        return Response(CartItemSerializer(cart_item).data)

    @action(detail=False, methods=['patch'], url_path='decrease')
    def decrease_quantity(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = CartItem.objects.get(user=request.user, car_id=car_id)
        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)

        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
            return Response(CartItemSerializer(cart_item).data)
        else:
            cart_item.delete()
            return Response({"message": "Cart item deleted."}, status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['delete'], url_path='remove')
    def remove_from_cart(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = CartItem.objects.get(user=request.user, car_id=car_id)
            cart_item.delete()
            return Response({"message": "Cart item removed from cart."}, status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)

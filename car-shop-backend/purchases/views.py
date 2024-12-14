from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Purchase
from cart.models import CartItem
from .serializers import PurchaseSerializer
from cars.models import Car

class PurchaseViewSet(viewsets.ModelViewSet):
    serializer_class = PurchaseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Purchase.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        if not isinstance(request.data, list):
            return Response(
                {"error": "Expected a list of purchases."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        purchases = []
        for purchase_data in request.data:
            car_id = purchase_data.get("car_id")
            quantity = purchase_data.get("quantity")

            if not car_id or not quantity:
                return Response(
                    {"error": "Each purchase must include car_id and quantity."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            try:
                car = Car.objects.get(id=car_id)
            except Car.DoesNotExist:
                return Response(
                    {"error": f"Car with ID {car_id} does not exist."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            purchase = Purchase.objects.create(
                user=request.user,
                car=car,
                quantity=quantity
            )
            purchases.append(purchase)

            CartItem.objects.filter(user=request.user, car=car).delete()

        serializer = self.get_serializer(purchases, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

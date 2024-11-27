from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import CompareItem
from cars.models import Car
from .serializers import CompareItemSerializer

class CompareViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        items = CompareItem.objects.filter(user=request.user)
        serializer = CompareItemSerializer(items, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'], url_path='add')
    def add_to_compare(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            car = Car.objects.get(id=car_id)
        except Car.DoesNotExist:
            return Response({"error": "Car does not exist."}, status=status.HTTP_404_NOT_FOUND)

        if CompareItem.objects.filter(user=request.user, car=car).exists():
            return Response({"error": "Car is already in comparison."}, status=status.HTTP_400_BAD_REQUEST)

        if CompareItem.objects.filter(user=request.user).count() >= 3:
            return Response({"error": "You can only compare up to 3 cars."}, status=status.HTTP_400_BAD_REQUEST)

        compare_item = CompareItem.objects.create(user=request.user, car=car)
        return Response(CompareItemSerializer(compare_item).data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['delete'], url_path='remove')
    def remove_from_compare(self, request):
        car_id = request.data.get("car_id")
        if not car_id:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            compare_item = CompareItem.objects.get(user=request.user, car__id=car_id)
            compare_item.delete()
            return Response({"message": "Car removed from comparison."}, status=status.HTTP_204_NO_CONTENT)
        except CompareItem.DoesNotExist:
            return Response({"error": "Car not found in comparison."}, status=status.HTTP_404_NOT_FOUND)

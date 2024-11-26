from django.db import models


class Car(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    images = models.JSONField(default=list)
    specs = models.JSONField()
    seller_info = models.JSONField()

    def __str__(self):
        return self.name

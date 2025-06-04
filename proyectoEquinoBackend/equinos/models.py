from django.db import models
from decimal import Decimal

class Equino(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.IntegerField()
    raza = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    foto = models.ImageField(upload_to='fotos_equinos/', blank=True, null=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    def __str__(self):
        return self.nombre

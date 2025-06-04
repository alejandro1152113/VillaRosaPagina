from django.db import models
from decimal import Decimal

class Equino(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))  # Valor por defecto para migrar
    raza = models.CharField(max_length=100)
    GENERO_CHOICES = [
        ('M', 'Macho'),
        ('H', 'Hembra'),
    ]
    genero = models.CharField(max_length=1, choices=GENERO_CHOICES, default='M')  # Valor por defecto para migrar
    foto = models.ImageField(upload_to='equinos_fotos/', blank=True, null=True)

    def __str__(self):
        return self.nombre

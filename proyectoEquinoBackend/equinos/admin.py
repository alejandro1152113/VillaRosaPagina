from django.contrib import admin
from .models import Equino

@admin.register(Equino)
class EquinoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'raza', 'edad')

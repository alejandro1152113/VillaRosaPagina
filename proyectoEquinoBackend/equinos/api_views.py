from rest_framework import serializers, viewsets
from .models import Equino

class EquinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equino
        fields = '__all__'

class EquinoViewSet(viewsets.ModelViewSet):
    queryset = Equino.objects.all()
    serializer_class = EquinoSerializer

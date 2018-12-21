from django.shortcuts import render
from .models import Film
from rest_framework import viewsets
from .serializers import FilmSerializer

class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all().order_by('release_date')[:5]
    serializer_class = FilmSerializer

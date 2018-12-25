from django.shortcuts import render
from .models import Film
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import FilmSerializer


class FilmViewSetAll(viewsets.ModelViewSet):
   queryset = Film.objects.all()
   serializer_class = FilmSerializer

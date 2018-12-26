from django.shortcuts import render
from .models import Film
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import FilmSerializer, GenreSerializer


class FilmViewSetAll(viewsets.ModelViewSet):
   queryset = Film.objects.all()
   serializer_class = FilmSerializer

   @action(detail=False, methods=['post'])
   def get_films(self, request):
      print(str(request.data['genre']))
      films = Film.objects.filter(genres__genre_name=str(request.data['genre']))[:10]
      serializer = FilmSerializer(films, many=True)
      return Response(serializer.data)


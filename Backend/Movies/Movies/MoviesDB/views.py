from django.shortcuts import render
from .models import Film, Genre
from rest_framework.response import Response
from rest_framework import generics
from .serializers import FilmSerializer, GenreSerializer


class FilmViewSet(generics.ListCreateAPIView):
   queryset = Film.objects.all()
   serializer_class = FilmSerializer

   def list(self, request, *args, **kwargs):
      if request.data:
         if 'genre' in request.data:
            queryset = self.queryset.filter(genres__genre_name=str(request.data['genre']))
         if 'start_date' and 'end_date' in request.data:
            try:
               queryset = queryset.filter(release_date__range=(str(request.data['start_date']), str(request.data['end_date'])))
            except:
               queryset = self.queryset.filter(release_date__range=(str(request.data['start_date']), str(request.data['end_date'])))

      else:
         queryset = Film.objects.all()

      page = self.paginate_queryset(queryset)
      if page is not None:
         serializer = self.get_serializer(page, many=True)
         return self.get_paginated_response(serializer.data)

      serializer = self.get_serializer(queryset, many=True)
      return Response(serializer.data)

class GenreViewSet(generics.ListCreateAPIView):
   pagination_class = None
   queryset = Genre.objects.all()
   serializer_class = GenreSerializer

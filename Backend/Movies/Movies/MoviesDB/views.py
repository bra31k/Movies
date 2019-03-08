from django.db.models import Q

from rest_framework.response import Response
from rest_framework import generics

from .models import Film, Genre
from .serializers import FilmSerializer, GenreSerializer


class FilmViewSet(generics.ListCreateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

    def list(self, request, *args, **kwargs):

        queryset = Film.objects.all()

        genre = request.GET.get('genre', None)
        search = request.GET.get('filter', None)
        date = request.GET.get('start_date' and 'end_date', None)

        params = Q()

        if genre:
            params = params & Q(genres__genre_name=request.GET['genre'])

        if search:
            params = params & Q(original_title__icontains=request.GET['filter'])

        if date:
            params = params & Q(release_date__range=(request.GET['start_date'], request.GET['end_date']))

        queryset = queryset.filter(params)

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

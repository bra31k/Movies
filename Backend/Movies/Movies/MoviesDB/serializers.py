from .models import Film, Genre
from rest_framework import serializers


class GenreSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Genre
        fields = ('genre_name', )


class FilmSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Film
        fields = ('original_title', 'release_date', 'poster_path')






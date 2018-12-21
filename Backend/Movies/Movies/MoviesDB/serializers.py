from .models import Film
from rest_framework import serializers



class FilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Film
        fields = ('original_title', 'release_date')






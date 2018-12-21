from django.db import models


class Genre(models.Model):
    genre_name = models.CharField(max_length=30)

    def __str__(self):
        return self.genre_name


class Film(models.Model):
    original_title = models.CharField(max_length=30)
    genres = models.ManyToManyField(Genre)
    poster_path = models.CharField(max_length=30)
    release_date = models.DateField(null=True)

    def __str__(self):
        return self.original_title


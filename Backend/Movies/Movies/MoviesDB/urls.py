from rest_framework import routers
from django.urls import path

from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path("films/", views.FilmViewSet.as_view(), name="films_list"),
    path("genres/", views.GenreViewSet.as_view(), name="genres_list"),

]


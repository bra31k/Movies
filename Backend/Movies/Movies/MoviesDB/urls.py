from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from . import views

router = routers.DefaultRouter()
# router.register(r'films', views.FilmViewSetAll)

urlpatterns = [
    path("films/", views.FilmViewSet.as_view(), name="films_list"),
    path("genres/", views.GenreViewSet.as_view(), name="genres_list"),

]


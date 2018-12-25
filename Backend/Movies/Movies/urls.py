from django.contrib import admin
from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .MoviesDB import views

#router = routers.DefaultRouter()
#router.register(r'films', views.FilmViewSetAll)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Movies.MoviesDB.urls')),
]

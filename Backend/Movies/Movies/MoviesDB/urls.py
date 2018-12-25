from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from . import views

router = routers.DefaultRouter()
router.register(r'films', views.FilmViewSetAll)

urlpatterns = [
    path('', include(router.urls)),
]


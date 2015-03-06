from django.conf.urls import patterns, url
from views import RaceListAPIView, RaceDetailAPIView, RaceCreateAPIView, RaceGenericListAPIView, RaceGenericRetrieveUpdateAPIView, \
    RaceListCreateAPIView


urlpatterns = patterns('',

    url(r'^$', RaceListAPIView.as_view(), name='RaceListAPIView'),
    url(r'^race/(?P<race_id>\d+)/$', RaceDetailAPIView.as_view()),
    url(r'^create/$', RaceCreateAPIView.as_view()),
    url(r'^list/$', RaceGenericListAPIView.as_view()),
    url(r'^generics/id/(?P<id>\d+)/$', RaceGenericRetrieveUpdateAPIView.as_view(), name="race-generic-single"),
    url(r'^athlete/$', RaceListCreateAPIView.as_view()),
)

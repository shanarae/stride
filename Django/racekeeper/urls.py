from django.conf.urls import patterns, url
from views import RaceListAPIView, RaceDetailAPIView, RaceCreateAPIView, RaceGenericListAPIView, RaceGenericRetrieveUpdateAPIView, \
    RaceListCreateAPIView, Analysis5KListCreateAPIView, Analysis10KListCreateAPIView, AnalysisHalfListCreateAPIView, \
    AnalysisMarathonListCreateAPIView, Analysis50KListCreateAPIView, Analysis100KListCreateAPIView, \
    Analysis100MListCreateAPIView, LocationsListCreateAPIView, UpcomingListCreateAPIView


urlpatterns = patterns('',

    url(r'^$', RaceListAPIView.as_view(), name='RaceListAPIView'),
    url(r'^race/(?P<race_id>\d+)/$', RaceDetailAPIView.as_view()),
    url(r'^create/$', RaceCreateAPIView.as_view()),
    url(r'^list/$', RaceGenericListAPIView.as_view()),
    url(r'^generics/id/(?P<id>\d+)/$', RaceGenericRetrieveUpdateAPIView.as_view(), name="race-generic-single"),
    url(r'^athlete/$', RaceListCreateAPIView.as_view()),
    url(r'^athlete/5K/$', Analysis5KListCreateAPIView.as_view()),
    url(r'^athlete/10K/$', Analysis10KListCreateAPIView.as_view()),
    url(r'^athlete/Half/$', AnalysisHalfListCreateAPIView.as_view()),
    url(r'^athlete/Marathon/$', AnalysisMarathonListCreateAPIView.as_view()),
    url(r'^athlete/50K/$', Analysis50KListCreateAPIView.as_view()),
    url(r'^athlete/100K/$', Analysis100KListCreateAPIView.as_view()),
    url(r'^athlete/100M/$', Analysis100MListCreateAPIView.as_view()),
    url(r'^athlete/locations/$', LocationsListCreateAPIView.as_view()),
    url(r'^athlete/upcoming/$', UpcomingListCreateAPIView.as_view())
)

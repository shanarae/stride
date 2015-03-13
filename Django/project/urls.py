from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^', include('app.urls')),
                       url(r'^races/', include ('racekeeper.urls')),
)
# ('',
# url(r'^registration/$', 'app.views2.registration', name='registration'))

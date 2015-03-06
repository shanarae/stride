from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Race(models.Model):

    class Meta:
        verbose_name = "Race"
        verbose_name_plural = "Races"

    DISTANCES = (
        (3.107, '5K'),
        (6.214, '10K'),
        (13.1, 'Half Marathon'),
        (26.2, 'Marathon'),
        (31.069, '50K'),
        (62.137, '100K'),
        (100, '100 Miles'),
    )

    event = models.CharField(max_length=100)
    date = models.DateField()
    distance = models.FloatField(choices=DISTANCES)
    bibNumber = models.IntegerField()
    finishTime = models.IntegerField()
    totalinRace = models.IntegerField(null=True, blank=True)
    overallPlace = models.IntegerField(null=True, blank=True)
    totalinGender = models.IntegerField(null=True, blank=True)
    genderPlace = models.IntegerField(null=True, blank=True)
    totalinDivision = models.IntegerField(null=True, blank=True)
    divisionPlace = models.IntegerField(null=True, blank=True)
    user = models.ForeignKey(User)

    @property
    def pace(self):
        return (self.finishTime) / (self.distance*60)

    @property
    def overallPercentile(self):
        return float("{0:.3f}".format(float(self.overallPlace) / self.totalinRace)) if self.overallPlace is not None else None

    @property
    def genderPercentile(self):
        return float("{0:.3f}".format(float(self.genderPlace) / self.totalinGender)) if self.genderPlace is not None else None

    @property
    def divisionPercentile(self):
        return float("{0:.3f}".format(float(self.divisionPlace) / self.totalinDivision)) if self.divisionPlace is not None else None

    def __str__(self):
        return "%s on %s" % (self.event, self.date)

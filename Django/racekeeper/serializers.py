from rest_framework import serializers
from django.contrib.auth.models import User
from models import Race


class UserSerialize(serializers.ModelSerializer):

    class Meta:
        model = User


class RaceSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "bibNumber", "finishTime", "totalinRace", "overallPlace", "totalinGender", "genderPlace", "totalinDivision", "divisionPlace", "pace", "overallPercentile", "genderPercentile", "divisionPercentile", "distanceLabel", "location")


class AnalysisSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "finishTime", "pace", "distanceLabel")

class LocationSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "location")
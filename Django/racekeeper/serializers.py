from rest_framework import serializers
from django.contrib.auth.models import User
from models import Race


class UserSerialize(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("id", "last_login", "username", "first_name", "last_name", "email", "date_joined")


class RaceSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "bibNumber", "finishTime", "totalinRace", "overallPlace", "totalinGender", "genderPlace", "totalinDivision", "divisionPlace", "pace", "overallPercentile", "genderPercentile", "divisionPercentile", "distanceLabel", "location", "latitude", "longitude")


class AnalysisSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "finishTime", "pace", "distanceLabel")

class LocationSerializer(serializers.ModelSerializer):
    user = UserSerialize(read_only=True)

    class Meta:
        model = Race
        fields = ("id", "user", "event", "date", "distance", "location", "latitude", "longitude")
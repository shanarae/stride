from django.contrib.auth.models import User
from rest_framework import serializers
from models import Address


class UserSerializer(serializers.ModelSerializer):
    """Serializes a User object"""
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class AddressSerializer(serializers.ModelSerializer):
    """Serializes an Address object"""
    class Meta:
        model = Address

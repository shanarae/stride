from models import Address
from serializers import UserSerializer, AddressSerializer, CreateUserSerializer
from rest_framework import generics
from rest_framework import permissions

from django.contrib.auth.models import User


class UserList(generics.ListCreateAPIView):
    """List all users or create a new User"""
    def get_queryset(self):
        return User.objects.all()

    permission_classes = (permissions.IsAuthenticated,)
    model = User
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateAPIView):
    """Retrieve, update or delete a User instance."""
    def get_queryset(self):
        return User.objects.filter(username=self.request.user.username)

    permission_classes = (permissions.IsAuthenticated,)
    model = User
    serializer_class = UserSerializer


class AddressList(generics.ListCreateAPIView):
    """List all addresses or create a new Address"""
    def get_queryset(self):
        user = User.objects.filter(username=self.request.user.username)
        return Address.objects.filter(user=user)


    queryset = Address.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    model = Address
    serializer_class = AddressSerializer


class AddressDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update or delete an Address."""
    permission_classes = (permissions.IsAuthenticated,)
    model = Address
    serializer_class = AddressSerializer


class RegisterUser(generics.CreateAPIView):
    serializer_class = CreateUserSerializer


class UserProfile(generics.ListCreateAPIView):

    def get_queryset(self):
        return User.objects.filter(username=self.request.user.username)

    permission_classes = (permissions.IsAuthenticated,)
    model = User
    serializer_class = UserSerializer
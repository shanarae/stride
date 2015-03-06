from rest_framework.views import APIView, Response
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateAPIView, ListCreateAPIView
from models import Race
from serializers import RaceSerializer


class RaceListAPIView(APIView):
    def get(self, request):
        queryset = Race.objects.all()

        serializer = RaceSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class RaceDetailAPIView(APIView):
    def get(self, request, race_id):
        race = Race.objects.get(pk=race_id)
        serializer = RaceSerializer(race)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, race_id):
        race = Race.objects.get(pk=race_id)
        if race:
            race.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, race_id, *args):
        serializer = RaceSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save(user=request.user)
            return Response(serializer.data, status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class RaceCreateAPIView(CreateAPIView):
    serializer_class = RaceSerializer

    def create(self, request, *args):
        serializer = RaceSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save(user=request.user)
            return Response(serializer.data, status.HTTP_201_CREATED)

        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class RaceGenericListAPIView(ListAPIView):
    model = Race
    serializer_class = RaceSerializer

    def get_queryset(self):
        return Race.objects.all()


class RaceGenericRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    model = Race
    serializer_class = RaceSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Race.objects.all()


class RaceListCreateAPIView(ListCreateAPIView):
    serializer_class = RaceSerializer

    def get_queryset(self):
        user = self.request.user
        return Race.objects.filter(user=user)
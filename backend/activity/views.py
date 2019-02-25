from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .serializer import *


@api_view(['GET', 'POST'])
def activity_list(request):
    """
    List or create activities
    """

    if request.method == 'GET':
        activity = Activity.objects.all()
        serializer = ActivitySerializer(activity, context={'request': request}, many=True)

        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def address_list(request):
    """
    List or create activities
    """

    if request.method == 'GET':
        address = Address.objects.first()
        serializer = AddressSerializer(address, context={'request': request})
        return Response({'data': serializer.data})

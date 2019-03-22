from rest_framework import viewsets

from api.serializers import LabelSerializer, ItemSerializer
from api.models import Label, Item


class LabelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows labels to be viewed or edited.
    """
    queryset = Label.objects.all().order_by('name')
    serializer_class = LabelSerializer


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = Item.objects.all().order_by('title')
    serializer_class = ItemSerializer

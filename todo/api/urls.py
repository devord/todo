from django.urls import include, path

from rest_framework import routers

from api.views import LabelViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'labels', LabelViewSet)
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]

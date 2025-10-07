from rest_framework import routers
from .views import EmployeeViewset
from django.urls import path, include

router = routers.DefaultRouter()
router.register('Employee', EmployeeViewset)

urlpatterns = [
    path('', include(router.urls))
]
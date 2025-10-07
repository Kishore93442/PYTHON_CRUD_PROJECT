from .models import Employee
from .serializer import EmpolyeeSerializer
from rest_framework import viewsets

class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmpolyeeSerializer
    
 
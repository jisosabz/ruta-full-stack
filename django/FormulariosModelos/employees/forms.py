from django.forms import ModelForm
from .models import Employee

class EmployeeForm(ModelForm):
    class Meta:
        model = Employee
        # ahora especificamos que valores se cargarán en el formulario
        fields = ['name', 'last_name', 'email']
        """
        ahi agregué todos los campos existentes, pero se puede hacer asi tambien:
        fields = ['__all__']
        campo extra:
        extra_fields = ['']
         
        """

# de esta forma se crea un formulario a partir de modelos de datos
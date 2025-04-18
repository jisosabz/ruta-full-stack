from django.forms import ModelForm, EmailInput, TextInput, Textarea

from contact.models import Contact


class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'
        exclude = ('date',)
        widgets = {
            'name': TextInput(attrs={'class': 'form-control', 'placeholder': 'Nombre'}),
            'last_name': TextInput(attrs={'class': 'form-control', 'placeholder': 'Apellido'}),
            'phone': TextInput(attrs={'class': 'form-control', 'placeholder': 'Teléfono'}),
            'mobile': TextInput(attrs={'class': 'form-control', 'placeholder': 'Celular'}),
            'email': EmailInput(attrs={'class': 'form-control', 'placeholder': 'Correo electrónico'}),
            'company': TextInput(attrs={'class': 'form-control', 'placeholder': 'Empresa'}),
            'notes': Textarea(attrs={'class': 'form-control', 'placeholder': 'Notas', 'rows': 4}),
        }
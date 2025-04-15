from django import forms
# se crea una clase por cada formulario
class CommentForm(forms.Form):
    name = forms.CharField(label='Nombre', max_length=100)
    url = forms.URLField(label='tu sitio web', required=False)
    comment = forms.CharField(label='comentario', max_length=200)

class ContacForm(forms.Form):
    name = forms.CharField(
        label='Nombre',
        max_length=100,
        #widget sirve para darle clases y cierto atributos para luego poder estilizarlos
        widget=forms.TextInput(attrs={
            'class': 'form-control',
        })
    )
    email = forms.EmailField(
        label='Email',
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
        })
    )
    message = forms.CharField(
        label='Mensaje',
        widget=forms.Textarea(attrs={
            'class': 'form-control',
        })
    )
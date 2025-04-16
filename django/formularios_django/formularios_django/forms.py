from django import forms
# se crea una clase por cada formulario
class CommentForm(forms.Form):
    name = forms.CharField(label='Nombre', max_length=100)
    url = forms.URLField(label='tu sitio web', required=False)
    comment = forms.CharField(label='comentario', max_length=200)

class ContacForm(forms.Form):
    name = forms.CharField(label='Nombre', max_length=10, widget=forms.TextInput(attrs={'class': 'form-control',}))
    email = forms.EmailField(label='Email',widget=forms.EmailInput(attrs={'class': 'form-control',}))
    message = forms.CharField(label='Mensaje', widget=forms.Textarea(attrs={'class': 'form-control',}))
    # widget sirve para darle clases y cierto atributos para luego poder estilizarlos
    # validaciones personalizadas abajo:
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if name != "open":
            # mensaje de error
            raise forms.ValidationError("El nombre de usuario no es valido")
        else:
            return name
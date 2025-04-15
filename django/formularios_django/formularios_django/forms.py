from django import forms
# se crea una clase por cada formulario
class CommentForm(forms.Form):
    name = forms.CharField(label='Nombre', max_length=100)
    url = forms.URLField(label='tu sitio web', required=False)
    comment = forms.CharField(label='comentario', max_length=200)
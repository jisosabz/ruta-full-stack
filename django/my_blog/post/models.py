from datetime import date
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100);
    email = models.EmailField();

    def __str__(self):
        return self.name

class Entry(models.Model):
    # esto va ser una clave foranea
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    #on_delete: sirve para mantener la integridad de datos en la base de datos
    # esto va ser una clave foranea
    headline = models.CharField(max_length=100)
    body_text = models.TextField()
    public_date = models.DateField(default = date.today())
    rating = models.IntegerField(default = 0)

    def __str__(self):
        return self.headline
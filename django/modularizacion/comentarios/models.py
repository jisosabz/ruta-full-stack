from django.db import models

# Create your models here.
class Comment(models.Model):
    name = models.CharField(max_length=100, null=False)
    score = models.IntegerField(default=3, null=False)
    comment = models.TextField(max_length=1000, null=False)
    date = models.DateField(null=True)
    signature = models.TextField(max_length=1000, null=False, default='')
    def __str__(self):
        return self.name
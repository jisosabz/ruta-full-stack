# Generated by Django 5.1.7 on 2025-04-07 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0002_comment_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='signature',
            field=models.TextField(default='', max_length=1000),
        ),
    ]

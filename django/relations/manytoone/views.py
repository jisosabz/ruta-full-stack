from datetime import datetime, date

from django.db.models.expressions import result
from django.http import HttpResponse
from django.shortcuts import render
from .models import Reporter, Article

# Create your views here.

def create(request):
    reporter = Reporter(first_name="Sonia", last_name="Jazmin", email="jazmingonzalez@gmail.com")
    reporter.save()

    article1 = Article(reporter=reporter, headline="lorem", publication_date=date(2022, 5, 5))
    article1.save()
    article2 = Article(reporter=reporter, headline="Mauricio", publication_date=date(2020, 4, 5))
    article2.save()

    result = reporter.article_set.all()
    return HttpResponse(result)
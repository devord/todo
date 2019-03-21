from django.db import models


class Label(models.Model):

    name = models.CharField(max_length=255, unique=True)


class Item(models.Model):

    title = models.CharField(max_length=255)

    description = models.TextField(default='')

    labels = models.ManyToManyField(Label)

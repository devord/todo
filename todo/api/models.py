from django.db import models


class Label(models.Model):

    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return 'Label(id=%s, name=%s)' % (self.id, repr(self.name))


class Item(models.Model):

    title = models.CharField(max_length=255)

    description = models.TextField(default='')

    labels = models.ManyToManyField(Label)

    def __str__(self):
        return 'Item(id=%d, title=%s)' % (self.id, repr(self.title))

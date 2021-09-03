from django.db import models

# ***************** abstract model *****************


class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created']


# ***************** 5 models created using the TimeStampedModel *****************

class Task(TimeStampedModel):
    text = models.CharField(max_length=100)
    priority = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    finished = models.BooleanField()

    def __str__(self):
        return self.text

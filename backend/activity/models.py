from django.db import models


# Create your models here.


class Address(models.Model):
    buildingName = models.CharField('Building Name', max_length=255, blank=True, null=True)
    buildingUnit = models.CharField('Building Unit', max_length=40, blank=True, null=True)
    placeName = models.CharField('Place Name', max_length=255)
    postcode = models.CharField('Postcode', max_length=20)
    streetName = models.CharField('Street Name', max_length=255)
    streetNumber = models.CharField('Street Number', max_length=20, blank=True, null=True)
    town = models.CharField('Town', max_length=20, blank=True, null=True)


class Activity(models.Model):
    name = models.CharField('Name', max_length=255)
    dateFrom = models.IntegerField()
    dateTo = models.IntegerField()
    webPage = models.CharField('Web Page', max_length=255)
    phone = models.CharField(blank=True, null=True, max_length=100)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True, null=True)

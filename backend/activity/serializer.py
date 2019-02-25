from rest_framework import serializers
from .models import Activity
from .models import Address

"""
Creating an one to one relation between Address and Activity database

"""
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('pk', 'buildingName', 'buildingUnit',
                  'placeName', 'postcode', 'streetName', 'town')


class ActivitySerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=True)

    class Meta:
        model = Activity
        fields = ('pk', 'name', 'dateFrom', 'dateTo', 'webPage', 'phone', 'address')

    def create(self, validated_data):
        """
        Overriding the default create method of the Model serializer.
        :param validated_data: data containing all the details of student
        :return: returns a successfully created student record
        """
        address_data = validated_data.pop('address')
        address = AddressSerializer.create(AddressSerializer(), validated_data=address_data)
        activity, created = Activity.objects.update_or_create(address=address, **validated_data)
        return activity

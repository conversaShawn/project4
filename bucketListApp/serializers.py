from rest_framework import serializers
from .models import User, BucketListItem, CheckListItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # id field is autogenerated by django. naes must match models in models.py
        fields = ["id", "userName", "email"]

class BucketListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BucketListItem
        # id field is autogenerated by django. naes must match models in models.py
        fields = ["id", "bucketListName", "status", "user"]

class CheckListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckListItem
        # id field is autogenerated by django. naes must match models in models.py
        fields = ["id", "bucketListName", "status", "bucketListItem"]
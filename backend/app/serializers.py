from rest_framework import serializers
from .models import Blog

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'image']

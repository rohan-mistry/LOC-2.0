from rest_framework import serializers
from .models import Post, Calc, Student, Assignment

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class CalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calc
        fields = (
            'newid',
            'num1',
            'num2',
            'result',
        )

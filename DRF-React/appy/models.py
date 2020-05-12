from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(default="abcd@abcd.com")
    hostel_name = models.CharField(max_length=200, default="default hostel")
    hostel_address = models.CharField(max_length=200, default="default address")
    def __str__(self):
        return self.name


class Assignment(models.Model):
    task = models.CharField(max_length=200)
    content = models.CharField(max_length=1000)
    submission_date = models.CharField(max_length=200)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
    done = models.BooleanField(default=False)
    ans = models.CharField(max_length=1000, default="default ans")
    is_corrected = models.BooleanField(default=False)
    marks = models.IntegerField(default=-1)
    def __str__(self):
        return self.task + " " + self.student.name

class Post(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Calc(models.Model):
    num1 = models.IntegerField()
    num2 = models.IntegerField()
    newid = models.IntegerField()
    result = models.IntegerField()
    def __str__(self):
        return str(self.num1) + " + " + str(self.num2)


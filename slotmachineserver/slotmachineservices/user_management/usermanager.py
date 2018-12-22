from django.contrib.auth.models import User

class UserManager():
    def __init__(self):
        pass
    
    def create_user(self):
        user = User.objects.create_user("default username")
        return user
    
    def save_user(self, username, password, email, first_name, last_name):
        user = self.create_user()
        user.username = username
        user.password = password
        user.email = email
        user.first_name = first_name
        user.last_name = last_name
        user.save()
        return True
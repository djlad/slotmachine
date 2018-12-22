import uuid
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class SlotMachinePlay(models.Model):
# userid SERIAL, playid SERIAL, time,result char(3), payout integer
    # user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    play_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = True)
    result = models.CharField(max_length = 3)
    payout = models.IntegerField()
    time = models.DateTimeField(auto_now=True)

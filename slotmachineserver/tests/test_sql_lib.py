import unittest
import psycopg2
import django
django.setup()
from slotmachineservices.models import SlotMachinePlay
from slotmachineservices.sql.queries import queries as qs

class TestSqlLib(unittest.TestCase):

    def test_connection(self):
        connection = None
        try:
            connection = psycopg2.connect(host="db",database="db", user="slotuser", password="thisishowwedo", port=5432)
            cur = connection.cursor()
            cur.execute(qs['Create_Play_Table'])
            cur.execute(qs['Create_User_Table'])
            ret = cur.fetchall()
            print(ret)

        finally:
            if connection:
                connection.close()
        
        def test_model(self):
            try:
                s = SlotMachinePlay()
                s.save()
            finally:
                print("success")

    

if __name__ == "__main__":
    unittest.main()
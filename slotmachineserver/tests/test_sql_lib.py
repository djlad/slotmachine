import unittest
import psycopg2
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

if __name__ == "__main__":
    unittest.main()
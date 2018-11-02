import unittest
import pymysql as pms
import psycopg2


class TestSqlLib(unittest.TestCase):
    def test_connection(self):
        connection = None
        try:
            connection = psycopg2.connect(host="db",database="db", user="slotuser", password="thisishowwedo", port=5432)
        finally:
            if connection:
                connection.close()

if __name__ == "__main__":
    unittest.main()
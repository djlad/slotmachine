import psycopg2 as db
from sql.queries import queries

def createDb():
    conn = db.connect(host="db",database="db", user="slotuser", password="thisishowwedo", port=5432)
    cur = conn.cursor()
    # test & create our two tables
    cur.execute(queries['Create_Play_Table']); cur.execute(queries['Create_User_Table'])

if __name__ == "__main__":
    createDb()
    # conn = db.connect(host="db", dbname="db", user)
    # pass
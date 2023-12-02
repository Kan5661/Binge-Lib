from dotenv import load_dotenv
import os
import psycopg2
from psycopg2 import extras

load_dotenv()

[DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT] = [os.getenv('DB_NAME'), os.getenv('DB_USER'), os.getenv('DB_PASSWORD'), os.getenv('DB_HOST'), os.getenv('DB_PORT')]


def fetch_user_table():
    try:
        # Establish connection to the PostgreSQL database
        conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)

        # Create a cursor object using the connection
        cursor = conn.cursor(cursor_factory=extras.DictCursor)

        # Example: Execute a SQL query
        cursor.execute("SELECT * FROM users;")
        rows = cursor.fetchall()

        # Display fetched data
        for row in rows:
            print(row)

        conn.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL", error)

    finally:
        # Close the cursor and connection
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")

#flask api set up for the server and database
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import psycopg2
from psycopg2 import extras

load_dotenv()

app = Flask(__name__)


# Connection parameters
dbname = os.getenv('DB_NAME')
user = os.getenv('DB_USER')
password = os.getenv('DB_PASSWORD')
host = os.getenv('DB_HOST')
port = os.getenv('DB_PORT')

try:
    # Establish connection to the PostgreSQL database
    conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host, port=port)

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
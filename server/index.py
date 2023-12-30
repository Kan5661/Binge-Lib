#flask api set up for the server and database
from flask import Flask, request, jsonify, redirect, url_for, session, flash
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity, create_refresh_token
from flask_cors import CORS
from psycopg2 import *
from dotenv import load_dotenv
from psycopg2 import extras
import os
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google.oauth2.credentials import Credentials
from email.mime.text import MIMEText

import util as util

load_dotenv()
[DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT] = [os.getenv('DB_NAME'), os.getenv('DB_USER'), os.getenv('DB_PASSWORD'), os.getenv('DB_HOST'), os.getenv('DB_PORT')]


app = Flask(__name__)
CORS(app, supports_credentials=True, origins='http://localhost:3000')
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

def connect_db():
    conn = connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT)
    return conn

# veryify token
@app.route('/verify', methods=['POST'])
@jwt_required()
def verify():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Hello World'})


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        print(data)
        conn = connect_db()
        cur = conn.cursor(cursor_factory=extras.RealDictCursor)
        cur.execute("SELECT * FROM users WHERE email = %s AND password = %s", (data['email'], data['password']))
        user = cur.fetchone()
        cur.close()
        conn.close()
        if user:
            print('login successful' )
            access_token = create_access_token(identity=user['username'])
            return jsonify({'message': 'Login successful', 'access_token': access_token})
        else:
            print('Wrong credentials')
            return jsonify({'message': 'Wrong credentials'})
    except Exception as e:
        return jsonify({'message': str(e)})

@app.route('/register', methods=['POST'])
def register():
    try:
        verification_code = util.generate_auth_code(12)
        data = request.json
        conn = connect_db()
        cur = conn.cursor(cursor_factory=extras.RealDictCursor)
        cur.execute("INSERT INTO unverified_users (username, password, email, code) VALUES (%s, %s, %s, %s)", (data['username'], data['password'], data['email'], verification_code))
        conn.commit()
        cur.close()
        conn.close()
        message = "Your account verification code is: " + verification_code + "\n\n" + "Please enter this code in the verification page to verify your account."
        util.send_mail(sender=os.getenv('GMAIL'), to=request.json['email'], subject='Verification code', message_text=message)
        return jsonify({'message': 'verification code sent'})
    except Exception as e:
        print(str(e))
        return jsonify({'message': str(e)})


@app.route('/code_verification', methods=['POST'])
def code_verification():
    try:
        data = request.json
        conn = connect_db()
        cur = conn.cursor(cursor_factory=extras.RealDictCursor)
        cur.execute("SELECT * FROM unverified_users WHERE code = %s", (data['verification_code'],))
        user = cur.fetchone()
        if user:
            cur.execute("INSERT INTO users (username, password, email) VALUES (%s, %s, %s)", (user['username'], user['password'], user['email']))
            cur.execute("DELETE FROM unverified_users WHERE code = %s", (data['verification_code'],))
            conn.commit()
            cur.close()
            conn.close()
            return jsonify({'message': 'User verified'})
        else:
            # return error
            return jsonify({'message': 'Wrong verification code'}), 400
    except Exception as e:
        return jsonify({'message': str(e)})

@app.route('/protected', methods=['GET'])
@jwt_required
def protected():
    return jsonify({'message': 'This is a protected route'})





if __name__ == '__main__':
    app.run(debug=True, port=3001)

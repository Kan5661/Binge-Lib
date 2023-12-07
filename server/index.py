#flask api set up for the server and database
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import os
import database as db


load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Hello World'})



if __name__ == '__main__':
    app.run(debug=True, port=3001)

#flask api set up for the server and database
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)

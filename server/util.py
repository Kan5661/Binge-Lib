import string, secrets
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

def generate_auth_code(length):
    characters = string.ascii_letters + string.digits
    return ''.join(secrets.choice(characters) for _ in range(length))

def send_mail(sender, to, subject, message_text):
    message = MIMEMultipart()
    message["From"] = sender
    message["To"] = to
    message["Subject"] = subject

    message.attach(MIMEText(message_text, "plain"))

    smtp_server = "smtp.gmail.com"
    smtp_port = 587  # SSL: 465, TLS: 587

    # Login to Gmail SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()  # Enable TLS encryption
        server.login(sender, os.getenv("GMAIL_PASSWORD"))  # Replace with your Gmail password
        server.send_message(message)
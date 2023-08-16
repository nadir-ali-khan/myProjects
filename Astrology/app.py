from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_USER'] = 'your_mysql_user'
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
app.config['MYSQL_DB'] = 'feedback_db'
app.config['MYSQL_HOST'] = 'localhost'

mysql_conn = mysql.connector.connect(
    user=app.config['MYSQL_USER'],
    password=app.config['MYSQL_PASSWORD'],
    host=app.config['MYSQL_HOST'],
    database=app.config['MYSQL_DB']
)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        feedback = request.form['feedback']
        
        cursor = mysql_conn.cursor()
        insert_query = "INSERT INTO feedback (name, email, feedback) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (name, email, feedback))
        mysql_conn.commit()
        cursor.close()
        
        return "Feedback submitted successfully!"
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

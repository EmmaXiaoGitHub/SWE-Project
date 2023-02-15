# Design a database for a ChatGPT app

## Tasks:
Imagine that you are building a ChatGPT app that allows users to ask questions and receive answers from the app.

1. Design a database using MySQL to store the questions and answers exchanged between users and the app.

2. Create a table for the questions with the following fields: id (Primary Key, Auto Increment), user_id (Foreign Key referencing the Users table), question, and timestamp.

3. Create a table for the answers with the following fields: id (Primary Key, Auto Increment), question_id (Foreign Key referencing the Questions table), answer, and timestamp.

4. Create a table for the users, with the following fields: id (Primary Key, Auto Increment), username, password, and email.

## Answer:
TODO: you need to add your sql query to each task here.

# Connect to the database
conn = mysql.connect()
cursor = conn.cursor()

# Create the chat_history table if it doesn't exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS chat_history (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id VARCHAR(255),
  question TEXT,
  response TEXT
)
""")

# Close the database connection
cursor.close()
conn.close()


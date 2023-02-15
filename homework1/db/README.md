# Design a database for a ChatGPT app

## Tasks:
Imagine that you are building a ChatGPT app that allows users to ask questions and receive answers from the app.

1. Design a database using MySQL to store the questions and answers exchanged between users and the app.

2. Create a table for the questions with the following fields: id (Primary Key, Auto Increment), user_id (Foreign Key referencing the Users table), question, and timestamp.

3. Create a table for the answers with the following fields: id (Primary Key, Auto Increment), question_id (Foreign Key referencing the Questions table), answer, and timestamp.

4. Create a table for the users, with the following fields: id (Primary Key, Auto Increment), username, password, and email.

## Answer:
TODO: you need to add your sql query to each task here.

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE chat_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question TEXT NOT NULL,
  response TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id


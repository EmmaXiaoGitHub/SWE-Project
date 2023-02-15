# Design a database for a ChatGPT app

## Tasks:
Imagine that you are building a ChatGPT app that allows users to ask questions and receive answers from the app.

1. Design a database using MySQL to store the questions and answers exchanged between users and the app.

2. Create a table for the questions with the following fields: id (Primary Key, Auto Increment), user_id (Foreign Key referencing the Users table), question, and timestamp.

3. Create a table for the answers with the following fields: id (Primary Key, Auto Increment), question_id (Foreign Key referencing the Questions table), answer, and timestamp.

4. Create a table for the users, with the following fields: id (Primary Key, Auto Increment), username, password, and email.

## Answer:
TODO: you need to add your sql query to each task here.

CREATE DATABASE chatgpt;
USE chatgpt;

CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    question VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

USE chatgpt;

CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    question VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE answers (
    id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

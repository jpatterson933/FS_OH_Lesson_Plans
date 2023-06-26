DROP DATABASE IF EXISTS dogs_db;
CREATE DATABASE dogs_db;

USE dogs_db;


CREATE TABLE Dogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    breed VARCHAR(50),
    age INT,
    weight DECIMAL(5, 2),
    owner VARCHAR(100)
);
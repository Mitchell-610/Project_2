DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;

\c pets_db;

CREATE TABLE pet (
  id SERIAL PRIMARY KEY,   -- Auto-incrementing ID for pet (Primary Key)
  user_id INT,                         -- Foreign key referencing 'user' table
  name VARCHAR(255) NOT NULL,          -- Pet's name (Required)
  owner VARCHAR(255) NOT NULL,         -- Pet's owner's name (Required)
  species VARCHAR(255) NOT NULL,       -- Pet's species (e.g. dog, cat) (Required)
  sex CHAR(1) NOT NULL,                -- Pet's gender (M or F) (Required)
  birth DATE NOT NULL,                 -- Pet's birthdate (Required)
  FOREIGN KEY (user_id) REFERENCES user(id) -- Foreign key constraint
);

CREATE TABLE user (
  id SERIAL PRIMARY KEY,         -- Auto-incrementing ID for user (Primary Key)
);
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;

\c pets_db;

CREATE TABLE owner (
  id SERIAL PRIMARY KEY,
  owner_name VARCHAR(100) NOT NULL
);

CREATE TABLE pet (
    id SERIAL PRIMARY KEY,
    owner_id INT,
    name VARCHAR (50),
    species VARCHAR (50),
    sex VARCHAR (8),
    birth VARCHAR (20),
    FOREIGN KEY (owner_id)
    REFERENCES owner(id)
);

SELECT * FROM pet;
SELECT * FROM owner;
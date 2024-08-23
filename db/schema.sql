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
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);


-- (name, owner, species, sex, birth, death)('Charlie', 'Alice', 'bird', 'm', '2016-01-18',
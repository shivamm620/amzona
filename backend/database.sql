CREATE DATABASE amazon;

CREATE TABLE  users(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    joined TIMESTAMP NOT NULL,
    isAdmin BOOlEAN  default false
);
CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    email text UNIQUE NOT NULL,
    isAdmin BOOlEAN  default false
);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR (3500) NOT NULL,
    time VARCHAR(350) NOT NULL,
    salary VARCHAR (350) NOT NULL,
    joined TIMESTAMP NOT NULL
)

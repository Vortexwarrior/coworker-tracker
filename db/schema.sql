DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(30) NOT NULL
);

Create TABLE roles(
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL NOT NULL,
     department_id INT NOT NULL,
     FOREIGN KEY (department_id)
     REFERENCES department(id) 
     ON DELETE SET NULL
);

CREATE TABLE employee(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(30) NOT NULL,
      LAST_NAME VARCHAR(30) NOT NULL,
      roles_id INT,
      FOREIGN KEY (roles_id)
      REFERENCES roles(id),
      manager_id INT NULL,
      FOREIGN KEY (employees_id)
      REFERENCES employees(db)
      ON DELETE SET NULL
);
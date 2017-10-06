-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS projectgroupfinderdb;
-- Create a database called programming_db --
CREATE DATABASE projectgroupfinderdb;

USE projectgroupfinderdb;

CREATE TABLE instructors_md5(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  Name varchar(100) NOT NULL, 
 Email varchar(100) NOT NULL, 
InstPass varchar(32) NOT NULL, 
Username varchar(16) NOT NULL, 
Position varchar(50) NOT NULL, 
Class varchar(50)   NOT NULL,
  
  PRIMARY KEY (id)
);


CREATE TABLE student_md5(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 Name varchar(100) NOT NULL,
Email varchar(100) NOT NULL,
StudentPass varchar(32)  NOT NULL,
Username varchar(16) NOT NULL,
Class varchar(50) NOT NULL,
  
  PRIMARY KEY (id)
);


CREATE TABLE  tas_md5(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 Name varchar(100) NOT NULL,
Email varchar(100) NOT NULL,
TAPass varchar(32)  NOT NULL,
Username varchar(16) NOT NULL,
Class varchar(50) NOT NULL,
  
  PRIMARY KEY (id)
);

CREATE TABLE student_skillset_md5(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 COMMANDLINE int(10) NOT NULL, 
HTMLCSS int(10) NOT NULL, 
BOOTSTRAP int(10) NOT NULL, 
JAVASCRIPT int(10) NOT NULL, 
JQUERY int(10) NOT NULL,
API int(10)  NOT NULL,
AJAX int(10) NOT NULL,
FIREBASE int(10) NOT NULL, 
NODEJS int(10) NOT NULL,
CONS int(10) NOT NULL,
OOP int(10) NOT NULL,
MYSQL int(10) NOT NULL,
EXPRESS int(10) NOT NULL,
NODESERV int(10) NOT NULL,
HANDLE int(10) NOT NULL,
MANGODB int(10) NOT NULL,
MERN int(10) NOT NULL,
REACTJS int(10)  NOT NULL,
C int(10) NOT NULL,
ALGORITHMS int(10) NOT NULL,
StudentPass varchar(32) NOT NULL,
  PRIMARY KEY (id)
);

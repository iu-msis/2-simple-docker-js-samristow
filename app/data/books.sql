SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS dbserver1;

USE dbserver1;

CREATE TABLE Booklist (
	id int primary key Auto_increment,
    title varchar(50) NOT NULL,
	authors varchar(50) NOT NULL,
	yearpublished Int NOT NULL,
	publisher varchar(50) NOT NULL,
	pgcount Int NOT NULL,
	msrp Int NOT NULL,
);

INSERT INTO Booklist (id, title, authors, yearpublished, publisher, pgcount, msrp) VALUES
(1,'War and Peace','Leo Tolstoy',1869, 'The Russian Messenger', 1225, 1000),
(2,'Love in the Time of Cholera', 'Gabriel Garcia Marquez', 1985, 'Editorial Oveja Negra', 348,13),
(3,'Lord of the Rings: The Return of the King','J.R.R Tolkein',1955,'Allen & Unwin',634,16),
(4,'Pedro Paramo','Juan Rulfo',1955,'Fondo de Vultura Economica',243,8),
(5,'Minecraft: the Complete Collection','Stephanie Milton et. al',2015,'Redstone Books',65,6);
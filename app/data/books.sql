CREATE TABLE Booklist (
	Title varchar(255) NOT NULL,
	Authors(s) varchar(255) NOT NULL,
	YearPublished Int NOT NULL,
	Publisher varchar(255) NOT NULL,
	PageCount Int NOT NULL,
	MSRP Int NOT NULL,
	PRIMARY KEY (Title)
);

INSERT INTO Booklist (Title, Author(s), YearPublished, Publisher, PageCount, MSRP)
VALUES ('War and Peace','Leo Tolstoy',1869, 'The Russian Messenger', 1225, 1000);
VALUES ('Love in the Time of Cholera', 'Gabriel Garcia Marquez', 1985, 'Editorial Oveja Negra', 348,13);
VALUES ('Lord of the Rings: The Return of the King','J.R.R Tolkein',1955,'Allen & Unwin',634,16);
VALUES ('Pedro Paramo','Juan Rulfo',1955,'Fondo de Vultura Economica',243,8);
VALUES ('Minecraft: the Complete Collection','Stephanie Milton et. al',2015,'Redstone Books',65,6);
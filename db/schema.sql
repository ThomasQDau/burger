### Schema
DROP DATABASE IF EXISTS nle8xngm9zpwkxfq;
CREATE DATABASE nle8xngm9zpwkxfq;
USE nle8xngm9zpwkxfq;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

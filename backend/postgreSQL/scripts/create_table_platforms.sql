CREATE SEQUENCE ids;
CREATE TABLE platforms (
     id    integer PRIMARY KEY DEFAULT nextval('ids'),
     name   varchar(50) NOT NULL CHECK (name <> '')
);
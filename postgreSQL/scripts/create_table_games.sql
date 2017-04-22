CREATE TABLE games (
     id    integer PRIMARY KEY DEFAULT nextval('ids'),
     platformId integer references platforms(id),
     name   varchar(50) NOT NULL CHECK (name <> '')
);
CREATE TABLE scores (
     id    integer PRIMARY KEY DEFAULT nextval('ids'),
     modeId integer references modes(id),
     name   varchar(50) NOT NULL CHECK (name <> ''),
     player varchar(50) NOT NULL CHECK (name <> ''),
     value decimal NOT NULL,
     highestWins boolean
);
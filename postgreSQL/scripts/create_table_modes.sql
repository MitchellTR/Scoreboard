CREATE TABLE modes (
     id    integer PRIMARY KEY DEFAULT nextval('ids'),
     gameId integer references games(id),
     name   varchar(50) NOT NULL CHECK (name <> '')
);
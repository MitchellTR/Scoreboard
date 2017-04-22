-- Procedure to insert a new game
    CREATE OR REPLACE FUNCTION add_game(platformId integer,name character varying(50)) 
    RETURNS void AS $$
    BEGIN
      INSERT INTO games VALUES (nextval('ids'),platformId, name);
    END;
    $$ LANGUAGE plpgsql;
-- Procedure to insert a new game mode
    CREATE OR REPLACE FUNCTION add_mode(gameId integer,mode character varying(50)) 
    RETURNS void AS $$
    BEGIN
      INSERT INTO modes VALUES (nextval('ids'),gameId, mode);
    END;
    $$ LANGUAGE plpgsql;
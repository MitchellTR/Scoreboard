-- Procedure to insert a new platform
    CREATE OR REPLACE FUNCTION add_platform(platform VARCHAR(70)) 
    RETURNS void AS $$
    BEGIN
      INSERT INTO platforms VALUES (nextval('ids'),platform);
    END;
    $$ LANGUAGE plpgsql;
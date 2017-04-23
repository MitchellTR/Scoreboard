-- Procedure that returns a cursor (its name specified as the parameter)
CREATE OR REPLACE FUNCTION show_scores(ref refcursor) RETURNS refcursor AS $$
BEGIN
OPEN ref FOR 
SELECT 
	a.name AS Game, 
	b.name AS Platform, 
	c.name AS Mode, 
	d.name AS Category,
	d.player AS Player, 
	d.value AS Score 
 FROM 
	games a 
	JOIN platforms b ON a.platformid = b.id 
	JOIN modes c ON a.id = c.gameId 
	JOIN scores d ON c.id = d.modeid;
RETURN ref;                                                       -- Return the cursor to the caller
END;
$$ LANGUAGE plpgsql;
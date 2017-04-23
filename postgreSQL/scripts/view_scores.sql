﻿CREATE VIEW scores_view AS
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
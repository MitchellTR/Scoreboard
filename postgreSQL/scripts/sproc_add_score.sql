select 
	a.name as game, 
	b.name as platform, 
	c.name as mode, 
	d.name as category, 
	d.player as player, 
	d.value as score 
from 
	games a join platforms b on a.platformid = b.id 
	join modes c on a.id = c.gameid 
	join scores d on c.id = d.modeid
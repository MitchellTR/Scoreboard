//index.js
'use strict'
const express = require('express')
const app = express()
const port = 3000
const pg = require('pg')
const conString = 'postgres://postgres:3nr1cpos@localhost/Scoreboard'
const router = express.Router()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
/*app.use(function(req,res){
  res.setHeader('Content-Type','text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body,))
})*/
/*app.post('/users',function(req,res,next){
  const user = req.body

  pg.connect(conString,function(err,client,done){
    if(err){
      return next(err)
    }
    client.query('INSERT INTO users (name,age) VALUES ($1,$2);',[user.name,user.age],function(err,result){
      done()
      if(err){
        return next(err)
      }
      res.send(200)
    })
  })
})*/
router.route('/scores')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    /*.post(function(req, res) {
        ...
    })*/

    // get all the scores (accessed at GET http://localhost:8080/api/scores)
    .get(function(req, res) {
      pg.connect(conString,function(err,client,done){
        if(err){
          return next(err)
        }
        client.query('SELECT * FROM scores_view;',[],function(err,result){
          done()
          if(err){
            return next(err)
          }

          res.json(result.rows)
        })
      })
    });

router.route('/games')
  .get(function(req,res){
    pg.connect(conString,function(err,client,done){
      if(err){
        return next(err)
      }
      client.query('SELECT name FROM games;',[],function(err,result){
        done()
        if(err){
          return next(err)
        }

        res.json(result.rows)
      })
    })
  })
  .post(function(req,res,next){
    pg.connect(conString,function(err,client,done){
      if(err){
        return next(err)
      }
      console.log(req)
      client.query('SELECT add_game($1,$2);',[req.body.platformId,req.body.name],function(err,result){
        done()
        if(err){
          return next(err)
        }

        res.sendStatus(200)
      })
    })
  });

router.route('/platforms')
  .get(function(req,res){
    pg.connect(conString,function(err,client,done){
      if(err){
        return next(err)
      }
      client.query('SELECT name FROM platforms;',[],function(err,result){
        done()
        if(err){
          return next(err)
        }

        res.json(result.rows)
      })
    })
  });

router.route('/modes/:game_id')
  .get(function(req,res){
    pg.connect(conString,function(err,client,done){
      if(err){
        return next(err)
      }
      client.query('SELECT name FROM modes WHERE gameid = $1;',[req.params.game_id],function(err,result){
        done()
        if(err){
          return next(err)
        }

        res.json(result.rows)
      })
    })
  });

app.use('/api', router);

app.listen(port,(err)=>{
  if(err){
    return console.log('Something bad happened',err)
  }
  console.log(`server is listening on ${port}`)
})

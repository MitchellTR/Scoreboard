//index.js
'use strict'
const express = require('express')
const app = express()
const port = 3000
const pg = require('pg')
const conString = 'postgres://user:pass@localhost/Scoreboard'
const router = express.Router()
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

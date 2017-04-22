//index.js
'use strict'
const express = require('express')
const app = express()
const port = 3000
const pg = require('pg')
const conString = 'postgres://username:password@localhost/database'

app.post('/users',function(req,res,next){
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
})

app.get('/users',function(req,res,next){
  pg.connect(conString,function(err,client,done){
    if(err){
      return next(err)
    }
    client.query('SELECT name, age FROM users;',[],function(err,result){
      done()
      if(err){
        return next(err)
      }

      res.json(result.rows)
    })
  })
})

app.listen(port,(err)=>{
  if(err){
    return console.log('Something bad happened',err)
  }
  console.log(`server is listening on ${port}`)
})

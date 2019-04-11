const express = require('express')
var bodyParser = require('body-parser')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const pgp = require('pg-promise')()
const db = pgp('postgres://uyorewfv:uuDe6LqdaasD_0lnYfBVr9jEadpS6vwW@stampy.db.elephantsql.com:5432/uyorewfv')
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  
  server.get('/reminders', (req, res, next) => {
    db.any('SELECT * from reminder;')
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.send(error);
    })
  })

  server.post('/reminders', (req, res, next) => {
    db.none('INSERT INTO reminder(content) VALUES($1);', [req.body.content])
    .then(function () {
      console.log("New reminder inserted succesfully")
      res.sendStatus(200)
    })
    .catch(function (error) {
      console.log("New reminder insertion error")
      console.error(error)
    })
  })

  server.delete('/reminders/:id', (req, res, next) => {
    db.none('DELETE FROM reminder where id = $1;', [req.params.id])
    .then(function () {
      console.log("Reminder deleted succesfully")
      res.sendStatus(200)
    })
    .catch(function (error) {
      console.log("Reminder deletion error")
      console.error(error)
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
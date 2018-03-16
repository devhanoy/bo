
const express = require('express')
const app = express()

const bodyParser = require('body-parser')



app.use(bodyParser.json())

const foncRouter = require('./rest/fonctionnalite/fonctionnalite.route')

app.use('/fonctionnalite', foncRouter)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


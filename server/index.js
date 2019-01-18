const express = require('express');
const bodyParser= require('body-parser')
const cr = require('./controller')



const app = express()
app.use(bodyParser.json())


app.get('/api/result', cr.getBG )
app.post('/api/result', cr.addBG)

app.listen(4001, ()=>console.log('SERVER is listening on 4001'))
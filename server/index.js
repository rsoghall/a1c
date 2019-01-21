const express = require('express');
const bodyParser= require('body-parser')
const cr = require('./controller')



const app = express()
app.use(bodyParser.json())
// app.use(express.static(__dirname + './../public/build'));

const resultsBaseUrl = '/api/result';
app.get(resultsBaseUrl, cr.getBG);
app.post(resultsBaseUrl, cr.addBG);
app.put(`${resultsBaseUrl}/:id`, cr.editBG);
app.delete(`${resultsBaseUrl}/:id`, cr.deleteBG);

app.listen(4001, ()=>console.log('SERVER is listening on 4001'))
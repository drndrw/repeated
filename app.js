const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var actions = require('./actions.js');

app.get('/', (req, res) => {
  res.json({'test': 'payload'});
});

app.post('/google', jsonParser, (req, res) => {
  console.log('request hit');
  console.log(req.body.queryResult.action);
  console.log(req.body);
  res.json(actions.welcome)
});

app.listen(3000, () => {})

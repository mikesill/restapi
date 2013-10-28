var express = require('express');
var model = require('./model');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('api test');
});

app.get('/schedule', function(req, res) {
   res.json(model.ScheduleList);
});

console.log('Listening on port 4730');
app.listen(process.env.PORT || 4730);

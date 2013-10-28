var express = require('express')
    ,mongoskin = require('mongoskin')


var app = express();

var db = mongoskin.db('localhost:27017/test', {safe: true});

app.param('collectionName', function(req, res, next, collectionName) {
  console.log('looking for: ' + collectionName);
  req.collection = db.collection(collectionName);
  return next();
});

app.get('/', function(req, res) {
  res.send('please select a collection, e.g., /c/message');
});

app.get('/c/:collectionName', function(req, res) {
  req.collection.find({},{limit:10, sort: [['_id',-1]]}).toArray ( function(e, results) {
    if(e)return next(e);
    res.send(results);
  });

});

app.listen(6969);

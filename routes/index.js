var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('server get called : ');
  mongo.connect("mongodb://localhost:27017/test", function(err, db) {
    if (err) next
    res.send('Connecting to db');
  });
});

module.exports = router;

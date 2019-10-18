var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
    if (err) next
    db
      .collection("users")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;

        res.json(result)
      });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('server get called : ');
  mongo.connect("mongodb://tjhair:ranap411@docdb-2019-10-20-04-40-24.cluster-czbjrjivzoox.ap-south-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0",{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err

    console.log('Server DB : ',db);
    res.send('coonect db : ',db);
  });
});

module.exports = router;

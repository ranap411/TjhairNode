var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('server get called : ');
  const uri = 'mongodb://tjhair:ranap411@docdb-2019-10-20-04-40-24.cluster-czbjrjivzoox.ap-south-1.docdb.amazonaws.com:27017/test?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0';
  mongo.connect(uri,{useNewUrlParser: true},(err,db)=>{
    if(err) res.status(500).send(err);

    var collection = db.collection('col');
    var data = collection.find({});
    console.log(data);
    res.send();
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require('./dbConnection');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(`Server gets called ${req.baseUrl} with request => : ${req.body}`);
  connection.get().collection('Tjhair_Users').findOne(req.body)
  .then((result)=>{
    console.log('request from data base : '+JSON.stringify(result));
    if(result !=null){
      res.json(result);
    }else{
      console.log('No response from database : ');
      res.status(412).send({"status":"failed","message":"user not found"});
    }
  }).catch((error)=>{
    res.status(500).send(error);
  })
});

module.exports = router;

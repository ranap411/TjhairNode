var express = require('express');
var router = express.Router();
const Connection = require('./dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('server get called');
  Connection.get().collection('plus91labs').find({}).toArray()
	.then((users) => {
      res.json({data : users});
  })
});

module.exports = router;
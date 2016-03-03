var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connect=mysql.createConnection( {
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'shop'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  
  connect.query("select * from sanpham",function(err,rows,fields){
  res.render('database', { result: rows});
  });
});

module.exports = router;

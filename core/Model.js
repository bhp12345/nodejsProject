
var method=Model.prototype;
function Model(){}
var mysql=require('mysql');
method.data;
var connect=mysql.createConnection( {
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'shop'
});

method.query=function(sql,callback){
connect.query(sql,function(err,rows,fields){
	if(err)
	callback(err,null);
	else
	callback(null,rows);
});
}


module.exports=Model;
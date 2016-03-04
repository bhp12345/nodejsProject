var Model=require('../core/Model');

function database_Model(){}
var method=database_Model.prototype;
method.getProducts=function(callback){  method.query("select * from sanpham",function(err,data){
if(err) callback(err,null);
else callback(null,data);
})};


method=new Model();
module.exports=database_Model;

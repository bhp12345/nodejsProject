var Controller=require('../core/Controller');
var method=database_Controller.prototype;
function database_Controller(name){ method.LoadModel(name);  }

method.show=function (req, res, next) {
 method.model.getProducts(function(err,data){
 res.render('database', {  result:data,message:'achiles'}); 
 });
  
};

method=new Controller();
module.exports=database_Controller;
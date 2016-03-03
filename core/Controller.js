var method=Controller.prototype;


method.LoadModel=function(name){
var model=require('../controllers/'+name+'_Model');
model=new name+'_Model'();
method.model=model;
}

module.exports
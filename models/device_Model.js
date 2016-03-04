var Model=require('../core/Model');
function device_Model(){}
var method=device_Model.prototype;
method.show=function(){ return 'achiles';};



method=new Model();
module.exports=device_Model;
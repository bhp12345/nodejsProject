var Model=require('../core/Model');
function index_Model(){}
var method=index_Model.prototype;
method.show=function(){ return 'achiles';};




method=new Model();
module.exports=index_Model;
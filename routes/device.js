var express = require('express');
var ejs=require('ejs');
var router = express.Router();
var fs=require('fs');
var dirPath='./public/files/';
var multiparty = require('multiparty');
var constants=require('../public/constant/path');
/* GET home page. */
router.get("/", function(req, res) {
	var arr=fs.readdirSync('./public/files');
	var files=[];
	var html;
	for(var i in arr)
	{
		var path=dirPath+arr[i];
		if(fs.statSync(path).isFile())
		{
		 files.push(arr[i]);
		}
	}

	res.render('device', {fileList:files});
	
});

router.post('/',function(req,res,next){
	if(req.method=="POST")
	{
	 if(req.body.filename)
	  {
		var fileName=req.body.filename;
		var content=req.body.content;
		fileName+='.txt';
		fs.writeFile(dirPath+fileName,content,function(err){ if(err) res.redirect('/device')});
		res.redirect('/device');
		
	  }
	}
	next();
});

router.post('/upload',function(req,res){
	if(req.method=="POST")
	{

		var form=new multiparty.Form();
		form.parse(req,function(err,field,files){
		var imgArr=files.images;
		for(var i in imgArr)
		{
			
			fs.readFile(imgArr[i].path,function(err,data){
			var path=dirPath+imgArr[i].originalFilename;
			fs.writeFile(path,data,function(err){});
			});
		}
		res.redirect(constants.site_path);
		});
		

		}
	
	
});

router.get('/download',function(req,res){
	var fileName=req.query.filename;
	fs.exists(dirPath+fileName, (exists) => {
	  if(!exists) res.redirect('.');;
	});
	var stat=fs.statSync(dirPath+fileName);
	res.setHeader('content-type', 'application/octet-stream');
	res.setHeader('content-disposition', 'attachment;filename="'+fileName+'"');
	res.setHeader('content-length', stat["size"]/1000000.0);
	var option={encoding:'utf8',flag:'r'};
	fs.readFile(dirPath+fileName,function(err,data){res.send(data);});
});

module.exports = router;

var express=require('express');
var http=require("http");
var bodyParser=require('body-parser');
var path=require('path');//路径操作 这是node有的模块


var app=express();

app.use(express.static(__dirname+"/public"));

app.use(bodyParser.json());
// console.log(app.use(bodyParser.json()));
app.use(bodyParser.urlencoded({extended:false}));
// console.log(app.use(bodyParser.urlencoded({extended:false})));

/*处理app请求*/
app.get("/test",function(req,res){
  res.type("text/html");
  res.status(200);
  res.send("<h1>/text</h1>");
});
//此处的number 就是路由参数
app.get("/test/:number/:price",function(req,res){
  console.log(req.params);// {number: xxx, price: xxx}
  res.status(200);
  res.send();  //res.json()也可以
});

app.get("/data",function(req,res){
  res.status(200)
  res.type("json");
  res.send({value:10});
});


var option={
  root:__dirname+"/public"
};

app.get("/file",function(req,res){
  res.sendFile("/files/stu.json",option,function(err){
    if(!err){
      console.log("send ok");
    }else{
      console.log(err);
      res.status(404).end();
    }
  });
});


  http.createServer(app).listen(8888,function(){
    console.log("监听 8888...");
  });


var http=require('http');
var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(express.static(__dirname+"/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var options={
  root:__dirname+"/public"
};//指定静态文件夹必须和这一步配合使用,否则依然认为从c盘开始找


app.get('/',function(req,res){
  //所有的req 和res的顺序一定不能错
  res.status(200);
  res.sendFile("/html/index.html",options);
});//这里的get是获取 获取前端的url

app.post("/login",function(req,res){   //post可理解为发送但须与ajax的url一致
  var name=req.body.name;
  var passwd=req.body.passwd;
  if(('lisi'===name)&&("123"===passwd)){
    //对前端的用户名和密码进行判断
    res.status(200);
    res.json({login:true,adminUrl:"/html/admin.html"});
    //验证通过跳到admin界面
  }else{
    req.status(200);
    res.json({login:false});
  }//验证没通过则还在login界面
});

app.get("/admin",function(req,res){
  //判断是否处于登录的状态
  //需要后边的知识判断

  //没有登录，那么重定向到登录页面(get请求)
  // res.redirect("/");

  res.status(200);
  res.sendFile("/html/admin.html",options);
});


app.use(function(req,res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found</h1>");
});


var server=http.createServer(app);
server.listen(8000,function(){
  console.log("监听 8000...");
});

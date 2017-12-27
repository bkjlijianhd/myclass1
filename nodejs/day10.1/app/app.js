
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var redis=require('redis');
var client=redis.createClient({host:'127.0.0.1', port: 6379, password: "3211014"})

client.on('connect',function(){
  console.log('connect ok!');
});

client.on('error',function(err){
  console.log("connect error:",err);
});


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
secret: 'hello',
resave: false,
saveUninitialized: true,
cookie: {
  maxAge: 60000,
  path: "/",
  httpOnly: true
}
}));



var options = {
  root: __dirname + "/public"
};


app.get('/', function(req, res){
  console.log(req.sessionID);
  // var sessionID=req.sessionID;
  client.hmset("message:1","name","sessionID","value",req.sessionID,function(err,reply){
    if(!err){
      console.log("hmset reply=",reply);

    }else{
      throw err;
    }
  });
  res.status(200);
  res.sendFile("/html/login.html", options);
});


app.post("/mesge", function (req, res) {
  var name = req.body.name;
  var passwd = req.body.passwd;

  if (('bkj' === name)  &&  ("920629" === passwd)){

    res.status(200);
    res.json({mesge: true, adminUrl: "/html/index.html"});

  } else {
    res.status(200);
    res.json({mesge: false});
  }

});




  //判断是否处于登录的状态

  //没有登录，那么重定向到登录页面(get请求)
  app.get("/index" , function(req, res){
  client.hget("message:1","value",function(err,reply){
    if(!err){

      if(req.sessionID===reply){
      res.status(200);
      res.sendFile("/html/index.html", options);

    }else{
      res.status(200);
      res.sendFile("/html/login.html", options);
    }
    }else{
      throw err;
    }
  });
});


app.use(function(req, res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});



var server = http.createServer(app);
server.listen(8000, function () {
  console.log("监听 8000.。。。。");
});


var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

//用于解析客户端发送的cookie
var cookieParser = require('cookie-parser');

var session = require('express-session');
//session也是中间件

var app = express();


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//使用中间件
app.use(cookieParser());

//用于设置session
/*
secret: 签名字符串（防止cookie被篡改）
*/
app.use(session({
  secret: 'hello',//这一项必须有其它可以没有
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
    path: "/",
    httpOnly: true//session基于cookie
  }
}));


var options = {
  root: __dirname + "/public"
};

app.get('/', function(req, res){

  console.log(req.sessionID);//得到了唯一的id ,基于secre随机生成

  // 将sessionID 存储到数据库中(redis 内存数据库)

  res.status(200);
  res.sendFile("/html/index.html", options);
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

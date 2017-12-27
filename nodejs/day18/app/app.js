
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

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


  res.status(200);
  res.sendFile("index.html", options);
});//index.html就是day17中build所有的文件复制来的,在现在的public中

app.use(function(req, res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});



var server = http.createServer(app);
server.listen(8000, function () {
  console.log("监听 8000.。。。。");
});

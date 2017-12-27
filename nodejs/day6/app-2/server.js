var http = require('http');
var fs = require('fs');
var url = require('url');
var socketIO = require('socket.io');

var server = http.createServer(function(req, res) {
  var myURL = url.parse(req.url);

  if (myURL.pathname === '/' && req.method === "GET") {
    fs.readFile("./index.html", "utf8", function(err, data) {
       if(!err){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    } else {
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end("<h1>server inner error</h1>");
    }
  });
} else {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end("<h1>not Found!</h1>");
}
});

server.listen(8000, function() {
console.log("监听 8000...");
});

var io=socketIO(server);

io.on('connection',function(socket){
  socket.nickname=+ new Date();

  socket.broadcast.emit('user connect',`${socket.nickname}上线了`);
  socket.on('disconnect',function(){
    console.log("客户端 断开连接");
    socket.broadcast.emit('user disconnect',`${socket.nickname}退出了`);
  });

  socket.on("client message",function(data){
    console.log("来自客户端的数据",data);
  });
  setTimeout(() => {
  socket.emit('server message', inner);
}, 1000);


});

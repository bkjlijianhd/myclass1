
/*
http中都包含哪些信息？？
*/

var http=require('http');
//创建一个http服务器
//返回一个server对象
//req 请求操作， res响应操作


var server=http.createServer(function(req,res){
//req发出请求上的一些信息    res服务器响应上也有一些事件

  //获取http的请求头部信息
  //这些是req message上的属性，有些获得是对象，需转成字符串才可用
  var headers=JSON.stringify(req.headers);
  console.log("req.method=",req.method);//get post一定要大写
  console.log("req.httpVersion=",req.httpVersion);//http版本
  console.log("req.url=",req.url);

  if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(headers);
    res.end();
  }else if(req.url==='/hello'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>HELLO</h1>");
    res.end();
  }else{

    res.end("other...");
  }
});
//给服务器指定监听的端口号
  server.listen(8000,function(){
    console.log("listen 8000...");
  });

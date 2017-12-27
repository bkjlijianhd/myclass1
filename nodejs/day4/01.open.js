
var fs=require('fs');

while(true){
  var fd=fs.openSync("./hello","w");//打开文件 文件描述符有上限
  console.log("fd=",fd);//w有就覆盖没有创建
  fs.closeSync(fd);//关闭描述符
}

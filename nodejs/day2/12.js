process.on('exit',function(code){
  console.log("exit code= ",code);
});

console.log(`process.pid=${process.pid}`);
var count=0;

setInterval(function(){
  console.log(count++);
},1000);//此程序无限循环需要 process.kill杀死见后一代码

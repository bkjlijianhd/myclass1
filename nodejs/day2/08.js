
//立即定时器，插队执行，默认执行一次
var id=setImmediate(function(value){
  console.log("setImmediate: ",value);
},10);

console.log(id);//对象，便于clearImmediate(id)
console.log("after setImmediate...");
//这种插队可以强制中断正在进行的程序 后可带参数时间说明是从什么时候中断

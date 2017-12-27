//箭头函数

var fun=(value)=>{
  value *=10;
  return value;
};
console.log(fun(10));

var fun2=(value)=>value*10;//简单时可以不用写return
console.log(fun2(10));

//var f=v =>v
//等价于
// var f=function(v){
//   return v;
// };

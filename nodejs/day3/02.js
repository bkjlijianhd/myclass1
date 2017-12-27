var obj={
  value:10,
  getValue:() =>{
    console.log(this.value);
  },
  getValue2:function(){
    console.log(this.value);
  }
};
obj.getValue();//undefined 用箭头函数的this定义的变量有关，没定义就是undefined
obj.getValue2();//10

console.log("/*******************************************/");
var number =0;
//这里的number并不是全局变量，下边的函数访问不到，这是nodejs和html的区别
function fun(){
  console.log("fun函数内部的this==",this);//没绑定对象里一大堆
  //有了fun.call({number:100}); fun内部的this为{number:100}
  // setTimeout(()=>{
  //   console.log(this.number);//undefined
  // },3000);

  setTimeout(function(){
    console.log(this.number);//undefined
  },3000);
}

fun();//undefined
fun.call({number:100});

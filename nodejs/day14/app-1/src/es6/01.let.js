

//let 没有声明提升
let a=10;
console.log("a=",a);

if(a){
  //let 以 {}作用域的划分
  let b=20;
}

// console.log("b = ", b);//错误

for(let i=0;i<10;i++){
  // console.log(i);
}
console.log(i);//错误

//都是由于let没有变量声明提升

function add(a,b){
  return a+b;
}

function minus(a,b){
  return a-b;
}

/* 模块内部测试代码，只能在本模块内部运行。
   当其他代码通过require引入该代码时，测试代码不用运行
*/

// console.log("require.main=",require.main);
// console.log("module=",module);
// console.log(require.main===module);//true 就是模块


if (require.main===module){
  console.log("只在funs.js内部使用");
}//可以打印出

//实现同上的功能
if(require.main.filename===__filename){
  console.log("只在funs.js内部使用");
}

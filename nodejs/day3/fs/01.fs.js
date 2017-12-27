var fs=require("fs");

// fs.readFile("../nodejs.md","utf8",function(err,data){
//   if(!err){
//     console.log("readFile 读取的内容为：",data);
//   }
// });

fs.readlink("./01.fs.js.link", "utf8", function (err, data){
  //没有错误时， err === null    路径就是原文件名
  console.log(err);//null

  if (!err){
    console.log("readlink 读取的内容为： ", data);//01.fs.js
  }
});
//创立软连接ln -s 01.fs.js 01.fs.js.link

// 同步读取文件
// var data=fs.readFileStync("../nodejs.md","utf8");
// console.log(data);

//readFile 只能读取普通文件  undefined
fs.readFile(".",function(err,data){
  console.log("readFile 错误", err);
  console.log("readFile读取目录： ", data);
});

console.log("after...");

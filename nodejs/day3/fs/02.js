var fs=require('fs');

//readdirSync 同步读取
fs.readdir("../",function(err,files){
  if(!err){
    console.log("readdir:",files);
  }// [ '01.js', '02.js', '03.html', '04.html', 'fs', 'nodejs.md' ]
});


//判断一个文件的文件 类型
//fs.statSync  同步版本
fs.stat(".",function(err,stat){

  //stat是一个对象
  // console.log("stat: ", stat);
  if(stat.isFile()){
    console.log("普通文件");
  }else if(stat.isDirectory()){
    console.log("目录");
  }else{
    console.log("其他文件类型");
  }
});//目录
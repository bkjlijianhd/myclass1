var fs=require('fs');

fs.unlink("./hello",(err)=>{
  console.log(err);
  if(!err){
    console.log("delete OK!");
  };
});//前边创建的hello被删除，打印出删除成功 

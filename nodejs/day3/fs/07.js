
var fs = require('fs');


//fs.open打开文件获得文件描述符(非负的整数)
// r, w, a ,r+, w+, a+ 标志位的意义

fs.open("hello.txt", "r+", (err, fd)=>{

  //此处的fd代表了 hello.txt这个文件
  console.log(`文件描述符为： ${fd}`);//12


  fs.write(fd, "我爱中国", 20, (err, len, str)=>{
    console.log(err);//null
    console.log(len);//写进去的字节个数(不是字符个数)12
    console.log(str);//写进去的字符 我爱中国
  });
});

//open必须在已有的文件

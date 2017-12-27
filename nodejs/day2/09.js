

console.log(process.argv);
// [ '/usr/local/node-v8.7.0-linux-x64/bin/node',
//   '/home/bkj/桌面/nodejs/day2/09.js' ]

//process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
process.argv.forEach(function (value,index){
  // console.log("index =" + index  +  "  value = " + value);

//${name}  直接去变量name的值
  console.log(`index=${index} value=${value}`);
});


//process的内容
for(var i=0; ; i++){
  if(i==15){
    process.exit(0);//结束当前程序, 0表示正常退出
                    //到14为止
  }
  console.log(i);
}

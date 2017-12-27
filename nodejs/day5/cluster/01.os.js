
var os=require('os');
//cpu的核心数量
console.log(os.cpus().length);
//os.cpus() 方法返回一个对象数组, 包含安装的每个CPU/CPU核的信息
console.log(os.platform());
//os.platform() 方法返回一个字符串, 指定Node.js编译时的操作系统平台

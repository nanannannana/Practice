console.log(__filename);
console.log(__dirname);

console.log("process.version: ", process.version);
console.log("process.arch: ", process.arch);
console.log("process.platform: ", process.platform);
console.log("process.cpuUsage: ",process.cpuUsage());
console.log("---------------------------------------");

const os = require('os');
console.log("os.type: ",os.type());
// console.log("os.cpus: ",os.cpus());
console.log("os.homedir: ",os.homedir());
console.log("os.freemem: ",os.freemem());
console.log("os.totalmem: ",os.totalmem());
console.log("---------------------------------------");

const path = require('path');
const file = __filename;
console.log("path.extname: ", path.extname(file)); //파일의 확장자(ext)를 가져옴
console.log("path.parse: ", path.parse(file)); //parse는 파일의 경로를 구분지어서 보여줌(ex, root, dir, ext(확장자) 등)
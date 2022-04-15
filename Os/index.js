const os = require("os");

console.log(os.arch());

const freeMemory  = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);


const total = os.totalmem();
console.log(`${total/1024/1024/1024}`);


console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());
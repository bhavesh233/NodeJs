const path  = require("path");

// console.log(path.dirname('/home/pp-7/Bhavesh/Node JS/PathModule/index.js'));
// console.log(path.extname("/home/pp-7/Bhavesh/Node JS/PathModule/index.js"));
// console.log(path.basename("/home/pp-7/Bhavesh/Node JS/PathModule/index.js"));
// console.log(path.parse("/home/pp-7/Bhavesh/Node JS/PathModule/index.js"));

const myPath = path.parse("/home/pp-7/Bhavesh/Node JS/PathModule/index.js");

console.log(myPath.name);
console.log(myPath.dir);





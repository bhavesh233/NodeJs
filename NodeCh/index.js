const fs = require("fs");


// fs.mkdirSync("NewFolder");

// fs.writeFileSync("NewFolder/bio.txt","Hello world");

// fs.appendFileSync("NewFolder/bio.txt"," Hello world to Javascript");

// const org_data =  fs.readFileSync("NewFolder/bio.txt").toString();
// const org_data =  fs.readFileSync("NewFolder/bio.txt","utf8");
// console.log(org_data);


// fs.renameSync("NewFolder/bio.txt","NewFolder/mybio.txt");

// fs.unlinkSync("NewFolder/mybio.txt");

fs.rmdirSync("NewFolder");



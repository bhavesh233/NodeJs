const fs = require("fs");

// create a new file
// fs.writeFileSync("read.txt","welcome to my channel");

// fs.writeFileSync("read.txt","Hi GoodMorning ");

// fs.appendFileSync("read.txt"," How are you I am fine Thank you");

// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data);

// const org_data = buf_data.toString();

// console.log(org_data);

fs.renameSync("read.txt","newRead.txt");



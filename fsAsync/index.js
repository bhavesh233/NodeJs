const fs = require("fs");

// fs.mkdir("thapa",(err)=>{
//     console.log(err);
// })


// fs.writeFile("thapa/bio.txt","my name is bhavesh",(err)=>{
//     console.log("file is created");
//     console.log(err);
// })


// fs.appendFile("thapa/bio.txt"," add some data in bio.txt file",(err)=>{
//     console.log("append Data");
//     console.log(err);
// })

// fs.readFile("thapa/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// })

// fs.rename("thapa/bio.txt","thapa/mybio.txt",(err)=>{
//     console.log("file renamed");
//     console.log(err);
// })

// fs.unlink("thapa/mybio.txt",(err)=>{
//     console.log("file deleted");
// })

fs.rmdir("thapa",(err)=>{
    console.log("directory deleted");
})
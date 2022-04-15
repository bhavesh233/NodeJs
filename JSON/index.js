const fs = require("fs");


const jsonObject = {
    name:"bhavesh",
    age:20,
    language:"java"
}

// convert object to JSON
const jsonData = JSON.stringify(jsonObject);
fs.writeFile("json1.json",jsonData,(err)=>{    
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})

// First print bc readFile is async funcation
const objectData = JSON.parse(jsonData);
console.log(objectData);




// // convert JSON to object 
// const objectData = JSON.parse(jsonData);
// console.log(objectData);






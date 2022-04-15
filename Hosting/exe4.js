// pass by value 

let a = 100;
let b = a;

b = b+5;

console.log(a);
console.log(b);



// pass by Reference

// const thapa = {
//     name:"vinod",
//     qualif:"MCS",
// }

// let newObject = thapa;

// newObject.name = "Bhavesh"
// newObject.language = "C++"

// console.log(thapa);
// console.log(newObject);



// pass by reference and pass by value in funcation

let abc = 100;

const thapa = {
    name:"vinod",
    qualif:"MCS",
}

function sayHello(thapa2,def){
    def = 500;
    thapa2.language = "JAVA"

}

sayHello(thapa,abc)

console.log(thapa);
console.log(abc);
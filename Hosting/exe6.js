// closure and lexically scope
// innerFuncation use a varible of outerFunction 

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a + b;
//     console.log(`the sum is ${sum}`);
//   };
//   innerFun()
// };


// outerFun(5)







// closure 
const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a + b;
      console.log(`the sum is ${sum}`);
    };
    return innerFun;
  };
  
  const inner = outerFun(5);
  console.log(inner);
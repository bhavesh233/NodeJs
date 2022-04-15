const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    // reject("Error while communication")
  }, 2000);
});

const bioData = (myData) => {
  return new Promise((resolve, reject) => {
    let myBioData = {
      name: "bhavesh",
      age: 20,
    };
    // resolve(myBioData);
    setTimeout(
      (myrollNo) => {
       resolve(
          `roll name is ${myrollNo}  name is ${myBioData.name} and age is ${myBioData.age}`
        );
      },
      2000,
      myData
    );
  });
};

pobj1
  .then((roll_no) => {
    console.log(roll_no);
   return bioData(roll_no[1])
  }).then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.log(err);
  });

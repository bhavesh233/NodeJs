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
          `roll name is ${myrollNo} name is ${myBioData.name} and age is ${myBioData.age}`
        );
      },
      2000,
      myData
    );
  });
};

async function getData() {
  const rollNoData = await pobj1;
  console.log(rollNoData);

  const myBioData = await bioData(rollNoData[1]);
  console.log(myBioData);

  return myBioData;

}

const value =  getData().then((myData)=>{
    console.log(typeof(myData));
});


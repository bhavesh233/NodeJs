function getValue() {
  setTimeout(() => {
    console.log("call the api");
    const roll_no = [1, 2, 3, 4, 5];
    console.log(roll_no);

    setTimeout(
      (rollNo) => {
        const bioData = {
          name: "bhavesh",
          age: 20,
        };

        console.log(
          `name is ${bioData.name} and age is ${bioData.age}. roll no is ${rollNo}`
        );

        setTimeout(
          (name) => {
            bioData.gender = "male";
            console.log(`${name} gender is ${bioData.gender}`);
          },
          2000,
          bioData.name
        );
      },
      2000,
      roll_no[1]
    );
  }, 2000);
}

getValue();

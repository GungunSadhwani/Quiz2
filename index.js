//Task1
function AverageCalculate (){
    let arr = [3,7,9,7,6,4]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i];  
    }
    console.log(sum);
    let average = sum / arr.length;
    console.log("the average of array is: "+ average);
}
AverageCalculate();

//Task2
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((value, index) => `Value at index ${index} is ${value}`);

result.forEach(item => console.log(item));

//Task3
const Person = {
    name: "Gungun",
    age: 19,
    country: "Pakistan",
    semester: "5",
    cms: "023-21-0169",
    details: [
      {
        contactNumber: "0310-9876545",
        email: "gun.doe@example.com"
      },
      {
        contactNumber: "0318-0987654",
        email: "gungun@gmail.com"
      },
      {
        contactNumber: "0314-1234567",
        email: "muskan@yahoo.com"
      }
    ]
  };
  
  // Printing the values of the object (not keys)
  Object.values(Person).forEach(value => console.log(value));
  



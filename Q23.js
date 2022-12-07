// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
const myNum = [7,10,16,17,18,33,56,333,"7"];
const myCar = ["Pajero",000,"RR","Ferrari"];
const mySkill = ["EH", "Dev", "Designer", "Leader",000];
console.log(myCar[0] == "Pajero");  //True 
console.log(myCar[4] == null);      //True
console.log(mySkill[0] != "Eh");    //True
console.log(myNum[0] < myNum[1]);   //True
console.log(myNum[4] > myNum[3]);   //True

console.log(myCar[1] == "RR");      //False
console.log(myCar[1] === "000");    //False
console.log(myNum[0] === myNum[8]); //False
console.log(mySkill[2] == "Dev");   //False
console.log(mySkill[4] != myCar[1]);//False
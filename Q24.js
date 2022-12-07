// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

console.log("AhMed".toUpperCase() == "AHMED");  //true
console.log("PaKIStan".toLowerCase() !== "pakistan"); //false
console.log(7 == "7"); // true
console.log(7 === "7"); //false
console.log(7 >= 0);//true
console.log(7 == 0);//false
console.log(7 <= 8); // true
console.log(8 == 7); //false
console.log("1" !== 1); //true
console.log("1" === 1); //false

console.log(1==1 && 0==0); //true
console.log(1==1 && 0!=0); // false

const myArray = [7,"RR","Hacker","WEB",3.0,3];
console.log(myArray[0] == 7) ; //true
console.log(myArray[2] != "Hacker"); // false
console.log(myArray[4] == myArray[5]); //true

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
let myObject ={};
function myCar(manufacturer,model,power,color,feature){
    myObject = {
        manufacturer:manufacturer,
        model:model,
        power:power,
        color:color,
        feature:feature
    }
    return myObject;
}

myCar("Toyota","Civic",600,"Black","Auto");
console.log(myObject);

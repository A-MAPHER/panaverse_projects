// 29. Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favorite_fruits = ["Melon", "Mango", "Apple","Banana","Grapes"];

for(let i =0; i<favorite_fruits.length; i++)
{

    if(favorite_fruits[i] == "Mango"){
        console.log(`You really like ${favorite_fruits[i]}!`);
    }

    if(favorite_fruits[i] == "Banana"){
        console.log(`You really like ${favorite_fruits[i]}!`);
    }

    if(favorite_fruits[i] == "Melon"){
        console.log(`You really like ${favorite_fruits[i]}!`);
    }

    if(favorite_fruits[i] == "Apple"){
        console.log(`You really like ${favorite_fruits[i]}!`);
    }

    if(favorite_fruits[i] == "Grapes"){
        console.log(`You really like ${favorite_fruits[i]}!`);
    }
}
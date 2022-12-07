// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// code from exercise 14------------------
const guests = ["Ali", "Qasim", "Hammad"];

for (let i = 0; i < guests.length; i++) {
    console.log("Would you like to have dinner with me, " + guests[i]);
}

// code updates---------------------------
console.log(`Number of guests are invited is : ${guests.length}`);

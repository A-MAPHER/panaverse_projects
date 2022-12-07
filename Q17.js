// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

const guests = ["Ali", "Qasim", "Hammad"];

guests.unshift("Hifz");
guests.splice(2, 0, "Nagma");
guests.push("Daniyal");
for (let i = 0; i < guests.length; i++) {

    if (guests[i] == "Hammad") {
        console.log(guests[i] + ", not comming for the dinner!");//Let say Hammad is not comming for the dinner
        guests[i] = "Amina";// we called Amina Instead...
    }
    console.log("Would you like to have dinner with me, " + guests[i]);



}

console.log("The bigger table won't be ready on time, there is space of two guests only!!!");
console.log("changing the invitations...");

for (let i = 5; i > 1; i--) {
    console.log("Sorry, unfortunately we can not invite you, " + guests[i]);
    guests.pop(); // removing the guests from the list one at a time....

}
for (let i = 0; i < guests.length; i++) {
    console.log("You are still invited, " + guests[i]);
}

guests.length = 0;

console.log("Empty Array : " + guests);
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


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

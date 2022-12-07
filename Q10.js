// 10. Adding Comments: Choose two of the programs you’ve written, 
// and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
//----------------------------------------------------------------------------------
// ---------PROGRAM 1 --------------------------------------------------------------
// Name : Ahmed Hussain  Date : 10/10/22
//

// this proram changes sting to uppercase,lowercase and titlecase-------------------
let name = "Ahmed Hussain";// Taking name from user
let upperCase = name.toUpperCase(); //converting name to uppercase
let lowerCase = name.toLowerCase();//converting name to lowercase

function titleCase(string) { // creating function for title case since it is not a JS defualt function
    var sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);

    }
    console.log(sentence.join(" "));
    return sentence;

}

console.log(lowerCase);// calling the name lowercase
console.log(upperCase);// calling the name uppercase
titleCase(name);  // calling the name titlecase


// -----------------------------------------------------------------------------------
// --------------------PROGRAM 2------------------------------------------------------
//this program concatinates author's name to qoute
let famous_person = "Abhijit Naskar";
console.log(famous_person + " once said, " + "\"No technology that\'s connected to the Internet is unhackable\" ");

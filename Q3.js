// 3. Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

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

console.log(lowerCase,"\n");// calling the name lowercase
console.log(upperCase,"\n");// calling the name uppercase
titleCase(name);  // calling the name titlecase

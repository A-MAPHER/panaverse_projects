// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magician = ["Harry","Copperfield","Wilson","Penn"];

function show_magicians(list){
    for(let i =0; i<list.length; i++){
        console.log(magician[i]);
    }
}

function make_great(list){
    for(let i = 0; i<list.length; i++){
        magician[i] = `Great ${list[i]}`;
    }
    return magician;

}

show_magicians(make_great(magician));
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magician = ["Harry","Copperfield","Wilson","Penn"]; // previous array
let magician_new = []; // new array --------------------------------

// Inserting elements of magician's array into new array-------------
function make_great(list){
    for(let i = 0; i<list.length; i++){
       magician_new[i] = `Great ${list[i]}`;
    }
}
make_great(magician);

// Calling our new array --------------------------------------------
function show_magicians(list){
    for(let i =0 ; i<list.length; i++){
        console.log(magician_new[i]);
    }

}
show_magicians(magician_new);
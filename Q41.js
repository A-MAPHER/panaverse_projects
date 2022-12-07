// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician = ["Harry","Copperfield","Wilson","Penn"];

function show_magicians(list){
    for(let i =0; i<list.length; i++){
        console.log(list[i]);
    }
}
show_magicians(magician);
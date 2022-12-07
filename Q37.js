// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love JavaScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

let size;
let message;
function make_shirt(size= "large" ,message = "I love JavaScript"){

    console.log(`Size of the shirt : ${size}`);
    console.log(`Message printed on shirt : ${message}`);
    console.log("------------------------------------------")
   

}

make_shirt(size, message);
make_shirt("medium",message);
make_shirt(34, "Never Give Up");

// Synchronous or blocking
// Asunchronous or non-blocking


// So here readfile will execute function when the reading is done
// Until then the rest of the code will be execute
// When the reading of the file is done then it will execute next function
// If a user is using the function so until we process it 
// Rest of the code will be executed
const fs = require("fs");
fs.readFile("d.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message.");
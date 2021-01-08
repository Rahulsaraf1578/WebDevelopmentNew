const fs = require("fs");

//So this is used to read data of file so fist input is file name and second is in which type 
// const text = fs.readFileSync("d.txt","utf-8");

// Replace content
// So here we have replace fun with pun
// Created a new file name rohan.txt with the data of text
let text = fs.readFileSync("d.txt","utf-8");
text = text.replace("fun","pun");

console.log("The content of file is:");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("rohan.txt",text);

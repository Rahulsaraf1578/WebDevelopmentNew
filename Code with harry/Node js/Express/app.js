// Importing express module
const express = require("express");

const path = require("path");
//Inilisae app using express and given a port
// The benefit of port 80 is we donot have to specify after localhost
const app = express( );
const port = 80;

//Set the template engine as pug
app.set('view engine','pug');

//Set the directory
app.set('views',path.join(__dirname,'views'));

//Our pug demo endpoint 
// We will not be using this pug much it was just for demo
app.get("/demo",(req,res )=>{
    res.status(200).render('demo',{title:'Hey Rahul',message:'Hello there! its good that you are learning something'})
});


//For serving static files inn static folder
app.use('/static',express.static('static'))

// Get request handing at / endpoint
app.get("/",(req,res )=>{
    res.send("This is my new year and we are on home page");
})

app.post("/about",(req,res )=>{
    res.send("This is a post request");
})

//If we want to give status 404
app.get("/this",(req,res )=>{
    res.status(404).end("This page not found on my website");
})

//It used to run the app
// If some one will listen to app then only it will run
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});
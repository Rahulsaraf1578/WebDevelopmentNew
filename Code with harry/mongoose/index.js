// getting started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rahul', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conncetion error:'));

// db.once('open', function () {
//     // We re connected
//     console.log("We are connected");
// });

// Making schema for the fields
var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function(){
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}

// Complies schema
var Kitten = mongoose.model('Kitten',kittySchema);

// Creating a variable
var rahulKitty = new Kitten({ name: 'rahulKitty' });
// console.log(rahulKitty.name); // 'Silence'

// rahulKitty.speak();

var rahulKitty2 = new Kitten({ name: 'rahulKitty2' });

// To save data in database
rahulKitty.save(function (err, rahulKitty) {
    if (err) return console.error(err);
    rahulKitty.speak();
  });

// To sava data in database
rahulKitty2.save(function (err, rahulKitty2) {
    if (err) return console.error(err);
    rahulKitty2.speak();
});

// To find rahulKitty in database
Kitten.find({name:"rahulKitty"},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens);
});
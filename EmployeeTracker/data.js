console.log("hello db");

//Create database for users, passwords, and timestamp
const Datastore = require("nedb"); //Require nedb
const db = new Datastore({filename: "users.db"}); //create db file
db.loadDatabase(); //Load db

//Emplyee Array
const empoyees = [];

//Employees
/*
var ejaz = {
    name: 'Ejaz Safi',
    kode: 1234,
};
var karat = {
    name: 'Karat',
    kode: 5647,
};

//Insert the emplyees in array - save users

//empoyees.push(ejaz, karat);
db.insert(empoyees, function(err, docs) {
    docs.forEach(function(d) {
        console.log('Saved user:', d.kode);
    });
});
*/

function findUserPas(){
    //Find password belonging to the user
    db.find({kode: 1234}, function(err, docs) {
        docs.forEach(function(d) {
            console.log('Found user kode belongs to :', d.name);
        });
    });
}

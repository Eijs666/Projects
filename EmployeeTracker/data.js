console.log("hello db");

//Create database for users, passwords, and timestamp
const Datastore = require("nedb");
const db = new Datastore({filename: "users.db", autoload: true});

//Emplyee Array
const empoyees = [];

//Employees
var ejaz = {
    name: 'Ejaz Safi',
    kode: 1234,
    tid: "0"
};
var karat = {
    name: 'Karat',
    kode: 5647,
    tid: "0"
};



//Insert the emplyees in array
empoyees.push(ejaz, karat);
db.insert(empoyees);

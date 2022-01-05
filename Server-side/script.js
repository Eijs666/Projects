const { response } = require("express");
const express = require("express");
const Datastore = require("nedb");
const { request } = require("http");
const { time } = require("console");
const app = express();
//Lyt ved port 3000
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {

    database.find({}, (err, data) => {
        if(err){
            response.end();
            return;
        }
        response.json({data});
    })
});

app.post("/api", (request, response) => {
    console.log("I got a request")
    console.log(request.body);

    const data = request.body;
    response.json({
        status: "Succes",
        latitude: data.latitude,
        longitude: data.longitude
    });
});
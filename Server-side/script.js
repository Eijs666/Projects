const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
//Lyt ved port 3000
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


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
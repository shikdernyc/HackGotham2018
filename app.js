const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const House = require('./House').House;
const Feature = require("./Items").Features;
const Advertiser = require("./User").Advertiser;
const Location = require("./Items").Location;
const LocationParser = require('./LocationParser').LocationParser;

lp = new LocationParser('AIzaSyCReE5aXx_8MnoBINpWV38mDeVKSExZoyY');

app.use(express.static('public'));
const post = 3000;

app.listen(post, function(){
    console.log("Running server on port: " + post)
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    //needs to be abs
    res.sendFile('/users/carolinmancebo/documents/HackGotham2018/public/main.html');
    // TODO: location needs to be manually added
});

app.post('/', function (req, res) {
   // Get routes for post requests
    console.log("received request");
    body = req.body;
    let features = new Feature(body.bed, body.utilities, body.prices, body.houseType, body.squareFootage, body.accessibility, body.amenities, body.parking);
    let advertiser = new Advertiser(body.name, body.phone);
    console.log(body.location);
    lp.getCodedLocation(body.location, (coded, simple)=>{
        console.log("Getting Location");
        let hLocation = new LocationParser(coded.lat, coded.long);
        let house = new House(hLocation, features, advertiser);
        console.dir(house);
        console.log("Creating House");
        House.addHouse(house);
        res.send("House added");
    });
    body = req.body;
    // res.send(house.toJSON())
    res.send("House added")

});

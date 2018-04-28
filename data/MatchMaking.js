const House = require('./Items.js').House;
const Location = require('./Items.js').Location;
const Features = require('./Items.js').Features;

let search = function(location, features, radius){
    // for each house within radius, return their values
};

let sortHouses = function(array){
    array.sort(function(a, b){
        //TODO: Make sure it works with negative coordinates
        return (a.location.lat - b.location.lat)*10 + (a.location.long - b.location.long);
    })
};

let house2 = new House("example.com", new Location(0,1), new Features(4,100,true,true,true));
let house1 = new House("example.com", new Location(0,0), new Features(4,100,true,true,true));

let houses = [house1, house2];

sortHouses(houses);

console.log(houses);
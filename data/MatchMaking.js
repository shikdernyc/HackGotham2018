const House = require('./Items.js').House; // This seems to import the House module as defined in the items.js code
const Location = require('./Items.js').Location; // This does the same, but imports the location module defined in items.js
const Features = require('./Items.js').Features; // This imports the definitions for Features

let search = function(location, features, radius){
    // for each house within radius, return their values
};

let sortHouses = function(array){
    array.sort(function(a, b){
        //TODO: Make sure it works with negative coordinates
        return (a.location.lat - b.location.lat)*10 + (a.location.long - b.location.long);
    }) // Define HOW exactly we will sort the houses in the array
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
} // For the purposes of obtaining random test houses

// --------------------------------------------------------------
// TEST CASES TO CHECK THE FUNCTIONALITY OF OUR SORTING ALGORITHM
// --------------------------------------------------------------

//  house_ = new House("picture.com", new Location(lat, long), new Features(#bedrooms, sq. footage, accessibility, pet, parking)
let house1 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
let house2 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
let house3 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
let house4 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
let house5 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
let house6 = new House("abcxyz.com", new Location(Math.floor(getRandomArbitrary(-2, 3)), Math.floor(getRandomArbitrary(-2, 3))),
                        new Features(4, 100, true, true, true));
// ----------------------------------
// PREPARING HOUSE ARRAY TO BE SORTED
// ----------------------------------

let houses = [house1, house2, house3, house4, house5, house6];

console.dir(houses)
sortHouses(houses);
console.log("END OF SORTING")
console.dir(houses)
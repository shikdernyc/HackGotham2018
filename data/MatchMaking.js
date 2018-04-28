const RandomGenerator = require('./utils.js').RandomGenerator;

let search = function(location, features, radius){
    // for each house within radius, return their values
};

let sortHouses = function(array){
    array.sort(function(a, b){
        //TODO: Make sure it works with negative coordinates
        return (a.location.lat - b.location.lat)*10 + (a.location.long - b.location.long);
    }) // Define HOW exactly we will sort the houses in the array
};

let houses = RandomGenerator(20, [70,70], [50,50]);

console.dir(houses);
sortHouses(houses);
console.dir(houses);
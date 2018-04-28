const House = require('./House.js').House; // This seems to import the House module as defined in the items.js code
const Location = require('./Items.js').Location; // This does the same, but imports the location module defined in items.js
const Features = require('./Items.js').Features; // This imports the definitions for Features

function getRandomArbitrary(min, max, whole=false) {
    if(!whole) {
        return +(Math.round((Math.random() * (max - min) + min) + "e+2") + "e-2");
    } else if(whole) {
        return Math.floor(Math.random() * (max - min) + min);
    } else {}
} // For the purposes of obtaining random test houses

function generateRandomTrueFalse() {
    let determination = getRandomArbitrary(0, 2, whole = true);
    if (determination < 1) { return false; }
    else { return true; }
} // For the purposes of parking, pets, etc


function generateRandomHouses(numHouses, topLimit, bottomLimit) {
    // We want to generate houses with limits imposed by the highest house (top left) and the
    // the lowest house (bottom right). Between this range we will have numHouse amount of houses

    const latUpperLimit = topLimit[0];
    const latLowerLimit = bottomLimit[0]
    const longUpperLimit = topLimit[1];
    const longLowerLimit = bottomLimit[1];
    // let is LESS global than var.
    // We are assuming that House is made available, as this is imported
    this.housesArray = []; // We can use push() to add something to an array
    for(let i = 0; i < numHouses; i++) {
        // Consider topLimit and bottomLimit are both arrays
        let currentRandomHouse = new House("www.dummywebsite.com",
                            new Location(getRandomArbitrary(latLowerLimit, latUpperLimit+1),
                                        getRandomArbitrary(longLowerLimit, longUpperLimit)),
                            new Features(getRandomArbitrary(0, 5, true), getRandomArbitrary(100, 2501, whole = true),
                                        generateRandomTrueFalse(), generateRandomTrueFalse(), generateRandomTrueFalse()));
        this.housesArray.push(currentRandomHouse);
    }
    return this.housesArray;
}

module.exports = {
    RandomGenerator: generateRandomHouses
}; //  This makes these variables/objects available for importing (for use by other JavaScript files)
function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

function Features(numOfBedRoom, utiliities, prices, type, squareFootage, accessibility, amenities, parking) {
    this.numOfBedRoom = numOfBedRoom;
    this.utilities = utiliities;
    this.price = prices;
    this.type = type;
    this.squareFootage = squareFootage
    this.accessibility = accessibility;
    this.amenities = amenities;
    this.parking = parking;
}

console.dir(new Location(0,0)); //  Displays all the properties of an object/variable the console

module.exports = {
    Location: Location,
    Features: Features
}; //  This makes these variables/objects available for importing (for use by other JavaScript files)
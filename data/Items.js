function House(picture, location, features, Advertiser) {
    this.location = location; //array of lat, long
    this.picture = picture; //use url
    this.features = features;
    this.Advertiser = Advertiser;
    this.distanceTo = function (location) {
        //TODO: Change Parameter to location
        const xDelta = location.lat - this.location.lat;
        const yDelta = location.long - this.location.long;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2))
    };
    this.toJSON = function () {
        return JSON.stringify({location: this.location, picture: this.picture, features: this.features.toJSON()})
    }
}

function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

function Features(numOfBedRoom, squareFootage, accessibility, petFriendly, parking) {
    this.numOfBedRoom = numOfBedRoom;
    this.squareFootage = squareFootage;
    this.accessibility = accessibility;
    this.petFriendly = petFriendly;
    this.parking = parking;
}

console.dir(new Location(0,0)); //  Displays all the properties of an object/variable the console

module.exports = {
    House: House,
    Location: Location,
    Features: Features
}; //  This makes these variables/objects available for importing (for use by other JavaScript files)
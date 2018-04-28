function House(picture, location, features, Advertiser) {
    this.location = location; //array of lat, long
    this.picture = picture; //use url
    this.features = features;
    this.Advertiser = Advertiser;
    this.distanceTo = function (house) {
        //TODO: Change Parameter to location
        const xDelta = house.location.lat - this.location.lat;
        const yDelta = house.location.long - this.location.long;
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

console.dir(new Location(0,0));

module.exports = {
    House: House,
    Location: Location,
    Features: Features
};
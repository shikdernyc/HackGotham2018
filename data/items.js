House = function (picture, location, features, Advertiser) {
    this.location = location; //array of lat, long
    this.picture = picture; //use url
    this.features = features;
    this.Advertiser = Advertiser;
    this.distanceTo = function(house){
        const xDelta = house.location.lat - this.location.lat;
        const yDelta = house.location.long - this.location.long;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2))
    };

    this.comparedTo = function (house) {
        return (this.location.lat - house.location.lat)*10 + (this.location.long - house.location.long);
    };

    this.toJSON = function(){
        return JSON.stringify({location: this.location, picture: this.picture, features: this.features.toJSON()})
    }
};

Location = function (lat, long) {
    this.lat = lat;
    this.long = long;
};

Features = function (numOfBedRoom, squareFootage, accessibility, petFriendly, parking) {
    this.numOfBedRoom = numOfBedRoom;
    this.squareFootage = squareFootage;
    this.accessibility = accessibility;
    this.petFriendly = petFriendly;
    this.parking = parking;
};
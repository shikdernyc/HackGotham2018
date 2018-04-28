class House{
    //TODO: Create a static House Array
    //TODO: Create a static method for adding Houses to the Array
    //TODO: Create a Search
    constructor(picture, location, features, advertiser){
        this.location = location; //array of lat, long
        this.picture = picture; //use url
        this.features = features;
        this.Advertiser = advertiser;
    }

    distanceTo(location){
        const xDelta = house.location.lat - this.location.lat;
        const yDelta = house.location.long - this.location.long;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2))
    }

    toJSON() {
        return JSON.stringify({location: this.location, picture: this.picture, features: this.features.toJSON()})
    }
}
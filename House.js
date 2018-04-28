class House {
    static houses = [];
    constructor(picture, location, features, advertiser) {
        this.location = location; //array of lat, long
        this.picture = picture; //use url
        this.features = features;
        this.Advertiser = advertiser;
    }

    static addHouse(house){
        House.houses.add(house);
    }
    static removeHouse(house) {
        House.houses.splice(House.houses.indexOf(house), 1);
    }
    //TODO: Create a Search
    static search(features, location){

    }
    static sortHouses() {
        House.houses.sort(function (a, b) {
            //TODO: Make sure it works with negative coordinates/
            return (a.location.lat - b.location.lat) * 10 + (a.location.long - b.location.long);
        })
    }
    distanceTo(location) {
        const xDelta = house.location.lat - this.location.lat;
        const yDelta = house.location.long - this.location.long;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2))
    }

    toJSON() {
        return JSON.stringify({location: this.location, picture: this.picture, features: this.features.toJSON()})
    }
}
const fs = require("fs");
class House {
    constructor(location, features, advertiser) {
        this.location = location; //array of lat, long
        this.features = features;
        this.advertiser = advertiser;
    }

    static addHouse(house){
        let housesJson = "";
        fs.readFile('./houses.json', (error, data) => {
            housesJson = data;
            housesJson = JSON.parse(housesJson);
            //End of creating JSON
            housesJson.houses.push(house);
            //TODO: Create a new file and write housesJson to it
        })
    }
    //TODO: Create a Search
    static search(features, location, radius) {
        //TODO: Read houses.json and find every house that matches our feature and search radius
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
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
    }

    toJSON() {
        return JSON.stringify({location: this.location.toJSON, picture: this.picture, features: this.features.toJSON})
    }
}

module.exports = {House: House};

const fs = require("fs");
class House {
    constructor(picture, location, features, advertiser) {
        this.location = location; //array of lat, long
        this.picture = picture; //use url
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
            fs.writeFile('./houses.json', housesJson, (err)=>console.log(err));
            console.log(housesJson);
        })
    }
    //TODO: Create a Search
    static search(features, location, radius) {
        let housesJson = "";
        let houses = [];
        fs.readFile('./houses.json', (error, data) =>{
            housesJson = data;
        });
        for(house in housesJson){
            if(house.distanceTo(location) < radius){
                //TODO: Cross reference features
            }
        }
        return houses;
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

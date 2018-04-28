User = function (location, radius) {
    this.location = location;
    this.radius = radius;
    this.search = features => {return features;} //use external module for matching
};

Advertiser = (username, contact, houses) => {
    this.location = username;
    this.contact = contact;
    this.houses = houses; //array
    this.addHouse = function (house) {
        houses.add(houses);
    }
    this.removeHouse = function (house){
        house.remove(house);
    }
};
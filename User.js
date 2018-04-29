Users = function (location, radius) {
    this.location = location;
    this.radius = radius;
    this.search = features => {return features;} //use external module for matching
};

function Advertiser(name, phone){
    this.name = name;
    this.phone = phone;
};

module.exports = {Advertiser: Advertiser};
let search = function(location, features, radius){
    // for each house within radius, return their values
};

let sortHouses = function(array){
    array.sort(function(a, b){
        return (this.location.lat - house.location.lat)*10 + (this.location.long - house.location.long);

    })
};

let house1 = new House("example.com", new Location(0,0), new Features(4,100,true,true,true));
let house2 = new House("example.com", new Location(0,1), new Features(4,100,true,true,true));

let houses = [house1, house2]

console.log(sortHouses(houses));
const House = require('./House.js').House;
const Location = require('./items.js').Location;
const Feature = require('./items.js').Features;

let h1 = new House("img.url", new Location(0, 0), new Feature(4, 100, true, true, true));
let h2 = new House("img2.url", new Location(1, 1), new Feature(4, 100, true, true, true));
House.addHouse(h1);
// console.dir(h1);
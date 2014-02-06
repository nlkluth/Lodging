var Model, Collection, Locations = {};

Model = require('./model');
Collection = require('./collection');

Locations.Model = Model.extend({});

Locations.Collection = Collection.extend({
  model: Model
});

var song1 = new Locations.Model({ name: 'Location One', Type: 'Cabin' });
var song2 = new Locations.Model({ name: 'Location Two', Type: 'Chalet' });
var song3 = new Locations.Model({ name: 'Location Three', Type: 'Condo' });

var locations = new Locations.Collection([ song1, song2, song3]);
module.exports = locations;

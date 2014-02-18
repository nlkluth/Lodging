var Model, Collection, Locations = {};

Model = require('./model');
Collection = require('./collection');

Locations.Model = Model.extend({});

Locations.Collection = Collection.extend({
  model: Locations.Model
});

var location1 = new Locations.Model({ name: 'Location One', type: 'Cabin' });
var location2 = new Locations.Model({ name: 'Location Two', type: 'Chalet' });
var location3 = new Locations.Model({ name: 'Location Three', type: 'Condo' });

var locations = new Locations.Collection([ location1, location2, location3]);
module.exports = locations;

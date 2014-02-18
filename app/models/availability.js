var Model, Collection, Availability;

Model = require('./model');
Collection = require('./collection');

Availability = Model.extend({});

module.exports = Collection.extend({
  model: Availability
});

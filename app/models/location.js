var Model, Collection, Location = {};

Location.Model = Model.extend({});

Location.Collection = Collection.extend({
  model: Location.Collection
});

module.exports = Location;
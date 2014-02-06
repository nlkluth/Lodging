var Model, Collection;

Model = require('./model');
Collection = require('./collection');

Model = Model.extend({});

module.exports = Collection.extend({
  model: Model
});

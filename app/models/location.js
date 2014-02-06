var Model, Collection;

Model = require('./model');
Collection = require('./collection');

Model = Model.extend({
  defaults: {
    name: '',
    location: '',
    address: ''
  }
});

module.exports = Collection.extend({
  model: Model
});

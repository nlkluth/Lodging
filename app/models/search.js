var Model;

Model = require('./model');

module.exports = Model.extend({
  initialize: function() {
    this.set('arrivalDate', new Date());
    this.set('departureDate', new Date());
  }
});

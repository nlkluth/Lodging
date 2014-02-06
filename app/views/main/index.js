var View, template, Locations;

View = require('../view').View;
template = require('./templates/index');
Locations = require('../location');

module.exports = View.extend({
  template: template,

  initialize: function() {
    this.setView('.locations', new Locations(), true);
  }
});

var Base, templates, List, Locations;

Base = require('../view');
Locations = require('models/location');
templates = {
  main: require('./templates/index'),
  list: require('./templates/list')
};

module.exports = Base.View.extend({
  template: templates.main,

  initialize: function() {
    this.setView('.selection', new Base.ListView({
      listItemView: List,
      collection: Locations
    }));
  }
});

List = Base.View.extend({
  template: templates.list
});
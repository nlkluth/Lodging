var View, LinksView, template;

View = require('../view').View;
template = require('./templates/header');

LinksView = View.extend({
  tagName: 'li',
  serialize: function() {
    return this.model.toJSON();
  }
});

module.exports = View.extend({
  template: template,
  id: 'header',
  keep: true
});

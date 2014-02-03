var View, LinksView, template;

View = require('../view').View;
template = require('./templates/header');

LinksView = View.extend({
  template: require('./templates/link'),
  tagName: 'li',
  serialize: function() {
    return this.model.toJSON();
  }
});

module.exports = View.extend({
  template: template,
  id: 'header',
  keep: true,

  beforeRender: function() {
    this.iterateOverList(LinksView, '.links');
  }
});

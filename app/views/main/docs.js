var View, Links, LinkView, linkTemplate, docsTemplate;

View = require('../view').View;
Links = require('models/link');
linkTemplate = require('./templates/link');
docsTemplate = require('./templates/docs');

LinkView = View.extend({
  tagName: 'li',
  template: linkTemplate,

  serialize: function() {
    return this.model.toJSON();
  }
});

module.exports = View.extend({
  template: docsTemplate,
  collection: new Links.Collection(),

  initialize: function() {
    this.collection.initializeDocsLinks();
  },
  beforeRender: function() {
    this.iterateOverList(LinkView, 'ul');
  }
});

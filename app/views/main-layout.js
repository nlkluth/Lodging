var View, template;

View = require('./view').View;
template = require('./templates/main-layout');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    this.on('route', function(route) {
      this.renderContent(route);
    }, this);
    var Header = require('./main/header'),
      Link = require('models/link');
    var links = new Link.Collection();
    links.initializeHeaderLinks();
    var header = new Header({
      collection: links
    });
    this.setView('header', header, true);
  },
  renderContent: function(ContentView) {
    ContentView = ContentView || require('./main/index');
    var content = new ContentView(this.regionProperties);
    this.setView('content', content).render();
  }
});

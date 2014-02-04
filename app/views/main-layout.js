var View, template, SearchModel;

View = require('./view').View;
template = require('./templates/main-layout');
SearchModel = require('models/search');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    this.on('route', function(route) {
      this.renderContent(route);
    }, this);
    var Header = require('./main/header'),
      Search = require('./search'),
      header = new Header({}),
      search = new Search({model: new SearchModel()});

    this.setView('header', header, true);
    this.setView('#search', search, true);
  },
  renderContent: function(ContentView) {
    ContentView = ContentView || require('./main/index');
    var content = new ContentView(this.regionProperties);
    this.setView('content', content).render();
  }
});

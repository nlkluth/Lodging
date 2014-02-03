var getMainRegion;

getMainRegion = _.once(function() {
  var MainLayout = require('views/main-layout');
  var layout = new MainLayout({
    el: $('div#app')
  });
  // $('body').empty().append(layout.el);
  layout.render();
  return layout;
});

function renderRegion(region, properties) {
  var layout = getMainRegion();
  layout.regionProperties = properties;
  layout.trigger('route', region);
  return layout;
}

// Defining the main application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'index',
    'docs': 'docs'
  },

  index: function() {
    renderRegion(require('views/main/index'));
  },
  docs: function() {
    renderRegion(require('views/main/docs'));
  }
});

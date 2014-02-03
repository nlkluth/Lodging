var Model, Collection, Link;

Model = require('./model');
Collection = require('./collection');
Link = {};

Link.Model = Model.extend({
  defaults: {
    name: '',
    url: '',
    external: false
  }
});
Link.Collection = Collection.extend({
  model: Link.Model,
  initializeHeaderLinks: function(data) {
    if (!data) {
      data = [{
        name: 'Docs',
        url: '/docs'
      },
      {
        name: 'Brunch',
        url: '//brunch.io',
        external: true
      },
      {
        name: 'Fork me on Github',
        url: '//github.com/talentriot/brunch-with-less',
        external: true
      },
      {
        name: 'Tests',
        url: '/test/',
        external: true
      }];
    }
    this.reset(data);
  },
  initializeDocsLinks: function(data) {
    if (!data) {
      data = [{
        name: 'README',
        url: '/'
      },
      {
        name: 'Brunch-With-Less Issues',
        url: '//github.com/talentriot/brunch-with-less/issues',
        external: true
      },
      {
        name: 'LayoutManager',
        url: 'http://tbranyen.github.com/backbone.layoutmanager/',
        external: true
      },
      {
        name: 'Backbone.js',
        url: 'http://backbonejs.org/',
        external: true
      },
      {
        name: 'Lo-Dash',
        url: 'http://lodash.com/docs',
        external: true
      },
      {
        name: 'LESS',
        url: 'http://lesscss.org/',
        external: true
      },
      {
        name: 'Brunch Docs',
        url: '//brunch.readthedocs.org/',
        external: true
      },
      {
        name: 'Brunch Issues',
        url: '//github.com/brunch/brunch/issues',
        external: true
      },
      {
        name: 'Brunch Skeletons',
        url: '//github.com/brunch/brunch/wiki/Skeletons',
        external: true
      },
      {
        name: 'Brunch Plugins',
        url: '//github.com/brunch/brunch/wiki/Plugins',
        external: true
      }];
    }
    this.reset(data);
  }
});
module.exports = Link;

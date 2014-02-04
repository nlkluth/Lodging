var View, template;

View = require('../view').View;
template = require('./templates/index');

module.exports = View.extend({
  template: template,

  events: {
    submit: 'submitSearch'
  },

  submitSearch: function() {
    // set search model.
  }
});

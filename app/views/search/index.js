var View, template;

View = require('../view').View;
template = require('./templates/index');

module.exports = View.extend({
  template: template,

  events: {
    submit: 'submitSearch'
  },

  submitSearch: function(e) {
    e.preventDefault();
    var arrivalDate = this.$('.arrival-date').val();
    var departureDate = this.$('.departure-date').val();
  }
});

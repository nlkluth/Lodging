var View, template;

View = require('../view').View;
template = require('./templates/index');

module.exports = View.extend({
  template: template,

  events: {
    submit: 'submitSearch'
  },

  serialize: function() {
    return this.model.toJSON();
  },

  submitSearch: function(e) {
    e.preventDefault();
    var arrivalDate = this.$('.arrival').val();
    var departureDate = this.$('.departure').val();
  }
});

describe('Baseline View', function() {
  var View, ListView, ItemView, data, collection, customList, listView;

  View = require('views/view').View;
  ListView = View.extend({tagName: 'ul'});
  ItemView = View.extend({tagName: 'li'});
  data = [{name: 'First Item'},
    {name: 'Second Item', custom: true},
    {name: 'Third Item', custom: true},
    {name: 'Forth Item'}];
  collection = new Backbone.Collection(data);

  beforeEach(function() {
    listView = new ListView({collection: collection});
    customList = collection.where({custom: true});
  });
  describe('Iterating over a list of models (iterateOverList)', function() {
    it('should work with no paramaters', function() {
      listView.iterateOverList();
      listView.views.should.have.property('').with.length(4);
    });
    it('should work with just a selector', function() {
      listView.iterateOverList('.foo');
      listView.views.should.have.property('.foo').with.length(4);
      listView.views['.foo'][0].tagName.should.equal('div');
    });
    it('should work with just a custom view', function() {
      listView.iterateOverList(ItemView);
      expect(listView.views[''][0].tagName).to.equal('li');
    });
    it('should work with a custom view and list of models', function() {
      listView.iterateOverList(ItemView, customList);
      listView.views.should.have.property('').with.length(2);
      expect(listView.views[''][0].tagName).to.equal('li');
    });
    it('should work with a custom view and selector', function() {
      // var customView = new ItemView();
      listView.iterateOverList(ItemView, '.foo');
      listView.views.should.have.property('.foo');
      listView.views['.foo'][0].tagName.should.equal('li');
    });
    it('should work with a custom view, selector and list of models', function() {
      listView.iterateOverList(ItemView, '.foo', customList);
      listView.views.should.have.property('.foo').with.length(2);
      listView.views['.foo'][0].tagName.should.equal('li');
    });
    it('should work with a custom list of models', function() {
      listView.iterateOverList(customList);
      listView.views.should.have.property('').with.length(2);
    });
    it('should work with a custom list of models and a selector', function() {
      listView.iterateOverList('.foo', customList);
      listView.views.should.have.property('.foo').with.length(2);
    });
  });
});

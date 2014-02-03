describe('Main Page', function() {
  var MainLayout = require('views/main-layout');
  var mainLayout = new MainLayout();
  var view, headerEl, layoutEl;

  view = mainLayout.render();
  view.trigger('route', require('views/main/index'));
  beforeEach(function() {
    layoutEl = view.$el;
    headerEl = layoutEl.find('header');
  });
  describe('Layout', function() {
    it('should have a jquery wrapped $el', function() {
      mainLayout.should.have.property('$el');
    });
    it('layout should be rendered', function() {
      mainLayout.should.have.property('hasRendered').that.equals(true);
    });
    it('$el should be able to find a child element', function() {
      headerEl.should.have.length(1);
    });
    it('there should be a link back to the homepage', function() {
      layoutEl.find('a[href="/"]').should.have.length.of.at.least(1);
    });
    it('there should be content', function() {
      layoutEl.find('content').text().should.have.length.of.at.least(2);
    });
  });
  describe('Header', function() {
    it('should display 4 links', function() {
      headerEl.find('ul li').should.have.length(4);
    });
    it('expect external links to have target=_blank', function() {
      headerEl.find('a[target="_blank"]').should.have.length.of.at.least(1);
    });
    it('should have a logo', function() {
      headerEl.find('img').should.have.length(1);
    });
  });
});

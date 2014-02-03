describe('Main Router', function() {
  var MainRouter = require('routers/main');
  var mainRouter = new MainRouter();
  it('should route to main correctly', function() {
    '/'.should.route.to(mainRouter, 'index');
  });
  it('should route to docs correctly', function() {
    '/docs'.should.route.to(mainRouter, 'docs');
  });
});

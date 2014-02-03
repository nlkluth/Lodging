exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  # Application build path.  Default is public/
  # buildPath: ''

  files:
    javascripts:
      joinTo:
        'scripts/app.js': /^app/
        'scripts/vendor.js': /^(vendor|bower_components)/
        'test/scripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/scripts/vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.10.1.js',
          'vendor/scripts/lodash.underscore-1.2.1.js',
          'vendor/scripts/backbone-1.0.0.js',
          'vendor/scripts/backbone.layoutmanager-0.8.8.js'
        ]
    stylesheets:
      joinTo:
        'styles/app.css': /^(app|vendor)/,
        'test/styles/test.css': /^test/
      order:
        before: [
          'vendor/styles/clearless/all.less'
          'app/views/styles/index.less'
        ]
        # after: ['vendor/styles/helpers.css']
    templates:
      joinTo: 'scripts/app.js'
  minify: no
  modules:
    wrapper: 'commonjs'
    definition: 'commonjs'
    addSourceURLs: no
  plugins:
    less:
      dumpLineNumbers: 'comments'

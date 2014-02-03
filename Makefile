REPORTER=spec

default: all

test: develop
	mocha-phantomjs -R $(REPORTER) public/test/index.html

develop:
	brunch build

.PHONY: test develop

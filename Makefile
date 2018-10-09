.PHONY: default install test

default:

install:
	npm install

test:
	./node_modules/.bin/tap tests.js

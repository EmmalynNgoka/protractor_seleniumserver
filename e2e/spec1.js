//spec1.js
var protractorbrowser = require("protractor");
var browser = protractorbrowser.browser;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).to.eventually.equal('Super Calculator');
    });
});

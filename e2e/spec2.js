//spec2.js
var protractorbrowser = require("protractor");
var browser = protractorbrowser.browser;
var element = protractorbrowser.element;
var by = protractorbrowser.by;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).to.eventually.equal('5'); // This is wrong!
    });
});

// spec3.js
var protractorbrowser = require("protractor");
var browser = protractorbrowser.browser;
var element = protractorbrowser.element;
var by = protractorbrowser.by;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

  it('should have a title', function() {
        expect(browser.getTitle()).to.eventually.equal('Super Calculator');
    });

    fit('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).to.eventually.equal('3');
    });

    it('should add four and six', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        // Fill this in.
        expect(latestResult.getText()).to.eventually.equal('10');
    });

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(latestResult.getAttribute('value')).to.eventually.equal('1');
    });
});

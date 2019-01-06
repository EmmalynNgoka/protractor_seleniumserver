// spec4.js
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
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).to.eventually.equal(2);

        add(5, 6);

        expect(history.count()).to.eventually.equal(0); // This is wrong!
    });
});

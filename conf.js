exports.config = {
    framework: 'jasmine',
    seleniumServerJar: '/Users/emmangoka/Documents/selenium-server-standalone-3.141.59.jar',
    specs: ['./e2e/spec4.js'],

    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}

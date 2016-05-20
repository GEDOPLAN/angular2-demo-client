/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        '../e2e/**/*.e2e.ts'
    ],
    multiCapabilities: [{
            'browserName': 'firefox'
        },
        {
            'browserName': 'chrome'
        }],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {}

    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
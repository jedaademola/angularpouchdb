var fs = require('fs');
var DOMParser = require('xmldom').DOMParser;
var CONFIG = {
    xml: "config-sample.xml",
    asXML: "config.xml",
    asJSON: "www/version.json"
};

var IFIS = {
    major: 0,
    minor: 0,
    patch: 0
};

module.exports = function (grunt) {
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: [
                    'tests/config.js',
                    (grunt.option('choice') === undefined) ? 'source/boot.js' : 'source/boot_production.js',
                    'source/assets/js/esb.js',
                    'source/controllers/LoginController.js',
                    'source/directives/frontpage.js',
                    'source/shared/IFISConnector.js',
                    'source/shared/config.js',
                    'source/shared/User.js',
                    (grunt.option('choice') === undefined) ? 'source/services/AppService.js' : 'source/services/AppService-production.js',
                    'source/services/WebSQLite.js',
                    'source/controllers/DashboardController.js',
                    'source/controllers/LoginController.js',
                    'source/controllers/AirtimeController.js',
                    'source/controllers/BillPaymentController.js',
                    'source/controllers/FundWalletController.js',
                    'source/controllers/FundTransfersController.js',
                    'source/controllers/PasswordController.js',
                    'source/controllers/CashOutController.js',
                    'source/controllers/SettingsController.js'
                ],
                options: {
                    keepRunner: true,
                    display: 'full',
                    summary: true,
                    vendor: [
                        "assets/js/angular.js",
                        "test/mock.js",
                        "bower_components/pouchdb/dist/pouchdb.js",
                        "bower_components/angular-pouchdb/angular-pouchdb.js",
                        "assets/js/ui-router.min.js",
                        "routes/config.js",
                        "app/patient/controller.js"
                    ],
                    specs: [
                        'test/spec/pouchdb.js'
                    
                    ],
                    junit: {
                        path: 'report/'
                    },
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'report/coverage/coverage.json',
                        report: [
                            {
                                type: 'cobertura',
                                options: {
                                    dir: 'report/coverage'
                                }
                            }
                        ]
                    },
                    phantomjs: {
                        resourceTimeout: 60000
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('test', ["jasmine"]);


};

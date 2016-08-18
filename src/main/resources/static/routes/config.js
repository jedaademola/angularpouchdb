//Create the Application module    
var AppHealth = angular.module('AppHealth', ['ui.router','pouchdb']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['AppHealth']);
});

(function() {
    var apphealth = angular.module('AppHealth');
    apphealth.config(['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
            $stateProvider.state('index', {
                url: "/index",
            }).state('patient', {
                url: "/patient",
                templateUrl: 'app/patient/patient.html'
            });
            $urlRouterProvider.otherwise('/index');
        }
    ]);
})();
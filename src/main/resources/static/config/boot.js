// A simple script to initialize the Database for us to use
(function () {
    var appHealth = angular.module('AppHealth');
    appHealth.run(["PouchService",function(PouchService){
        PouchService.init();
    }]);
})();
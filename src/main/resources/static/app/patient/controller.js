(function() {

    var apphealth = angular.module('AppHealth');

    apphealth.run(['pouchDB','$rootScope',function(pouchDB){
      
    }]);
    apphealth.controller('PatientController', ['$scope', 'pouchDB','$rootScope',function($scope, pouchDB) {
        $scope.data = null;
        
        var database=pouchDB('ehealth');
        database.allDocs({include_docs:true}).then(function(data){
              console.log(data);
              $scope.data=data.rows;  
            
        });
    }]);
    apphealth.directive('createPatient', ['pouchDB', '$timeout', function(pouchDB, $timeout) {
        return {
            restrict: 'E', // Custom Element type
            replace: 'true', // Dom substitution or whatever the hell angular calls it
            scope: {

            },
            templateUrl: "./app/patient/tmpl/create.html",
            link: function(scope, element, attrib) {
                scope.model = {
                    firstname: "",
                    lastname: "",
                    email: "",
                    _id: new Date().toISOString()
                };
                scope.status = null;
                scope.statusText = "";
                //Create a Patient for the Datasource
                scope.addPatient = function() {
                    var db = pouchDB('ehealth',{adapter:'websql'});
                    db.put(scope.model, function(err, response) {
                        if (err) {
                            return console.log(err);
                        }
                        //Create the response
                        scope.status = true;
                        scope.statusText = "Record Added !";
                        scope.model.firstname = scope.model.lastname = scope.model.email = null;
                        $timeout(function() {
                            scope.status = null;
                            scope.statusText = "";
                        }, 4000);
                    });
                };
            }
        };
    }]);
})();
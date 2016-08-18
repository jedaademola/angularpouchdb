(function() {

    var apphealth = angular.module('AppHealth');

    apphealth.run(['pouchDB','$rootScope',function(pouchDB){
      
    }]);
    apphealth.controller('PatientController', ['$scope', 'pouchDB', '$rootScope', function ($scope, pouchDB, $rootScope) {
        $scope.data = null;
        
        var database=pouchDB('ehealth');
        database.allDocs({include_docs:true}).then(function(data){
              console.log(data);
              $scope.data=data.rows;  
            
        });

        $rootScope.$on("list", function () {
            var database = pouchDB('ehealth');
            database.allDocs({include_docs: true}).then(function (data) {
                console.log(data);
                $scope.data = data.rows;

            });
        });
    }]);
    apphealth.directive('createPatient', ['pouchDB', '$timeout', '$rootScope', function (pouchDB, $timeout, $rootScope) {
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
                    db.put(scope.model).then(function (resp) {
                        //Create the response
                        document.getElementById("messageText").innerHTML = "Record Added !";
                        scope.model.firstname = scope.model.lastname = scope.model.email = null;
                        $rootScope.$broadcast("list"); //trigger the event for the application
                        $timeout(function() {
                            scope.status = null;
                            document.getElementById("messageText").innerHTML = "";
                        }, 3000);

                    });

                };
            }
        };
    }]);
})();
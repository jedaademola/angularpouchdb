(function () {
    var apphealth = angular.module('AppHealth');
    apphealth.controller('PatientController',['$scope',function($scope){
        
    }]);

    
    apphealth.directive('createPatient', [function () {
    

    return {
        restrict: 'E', // Custom Element type
        replace: 'true', // Dom substitution or whatever the hell angular calls it
        scope:false,
        templateUrl:"./app/patient/tmpl/create.html",
        link: function (scope, element, attrib) {
            scope.model={
                firstname:"Okeowo",
                lastname:"Aderemi",
                email:"okeowoaderemi@gmail.com"
            }
        }
    };
}]);
        
})()

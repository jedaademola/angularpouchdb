(function(){
    var service=angular.module('AppHealth');
    service.factory('PouchService',['pouchDB',function(pouchDB){
        var instance=null
        return {
            init:function(){
                //create our Database to be used
                instance=new PouchDB("ehealth");
            },
            getInstance:function(){
                if(instance === null){
                    this.init();
                }
                return instance;
            }
        }
    }]);
})();
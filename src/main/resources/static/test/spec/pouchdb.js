describe("PouchDb Suites", function () {
    var injector, rootScope, pouchDbVar,db;
    var controller = null;
    var input;

    //Before Each Call
    beforeEach(function () {
        module("AppHealth");
        //Get the Global Injector
        inject(function (pouchDB) {
            pouchDbVar = PouchDB;
            
        });
        db = pouchDbVar('shinigami', { adapter: 'websql' });
        window.dbT=db;
        var record = {
            _id: new Date().toISOString(),
            title: "L, Do you know? Shinigami Only eat Apples.",
            content: "The world needs to be purge"
        }
        db.put(record);
    });
    //After Each Call
    afterEach(function () {

    });

    //Test the Suite for Password is Required
    it("Pouchdb get scenario", function (done) {
        db.allDocs().then(function(result){
            expect(result).not.toBe(null);
            expect(result.rows > 0,"This doesn't have data");
            done();
        })
    });

});

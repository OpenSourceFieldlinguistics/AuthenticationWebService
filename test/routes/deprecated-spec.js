// var authWebService = require('./../../auth_service').authWebService;
var CORS = require("fielddb/api/CORSNode").CORS;
var maxSpecTime = 5000;

var SERVER = "https://localhost:3183";
if (process.env.NODE_DEPLOY_TARGET === "production") {
  SERVER = "http://localhost:3183";
}

describe("Corpus REST API", function() {

  xit("should load", function() {
    expect(authWebService).toBeDefined();
  });

  describe("login", function() {

    it("should accept options", function(done) {

      CORS.makeCORSRequest({
        url:  'https://localhost:3183/login',
        method: 'POST',
        // dataType: 'json',
        data: {
          username: 'testingprototype',
          password: 'test'
        }
      }).then(function(response) {
        expect(response).toBeDefined();
        return response;
      }, function(reason) {
        console.log(reason);
        expect(reason).toBeUndefined();
        return reason;
      }).fail(function(error) {
        console.log(error);
        expect(excpetion).toBeUndefined();
        return error;
      }).done(done);

    }, maxSpecTime);

  });
});

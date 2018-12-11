var config = require('config');
var expect = require('chai').expect;
var path = require('path');
var replay = require('replay');
var supertest = require('supertest');
var server;

replay.fixtures = path.join(__dirname, '/fixtures/replay');

before(function setUpService() {
  var test;
  if (process.env.URL) {
    return null;
  }

  // keep the port constant for oauth testing
  bin = require('../bin/www'); // eslint-disable-line global-require
  return bin.ready.then(function(serv) {
    server = serv;
    test = supertest(server)
      .get('/v1/healthcheck');

    expect(test.url).to.contain(config.httpsOptions.port);
    process.env.URL = test.url.replace('/v1/healthcheck', '');

    return test
      .expect(200);
  });
});

after(function turnOffService() {
  if (process.env.URL) {
    return;
  }

  server.close();
  server = null;
});

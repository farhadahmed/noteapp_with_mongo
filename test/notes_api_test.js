'use strict';

process.env.MONGO_URI = 'mongodb://localhost/noteapp_test';
require('../server.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var expect = chai.expect;

describe('notes api end points', function() {
  after(function(done) {
    /* mongoose.connection gives us access to the mongoDB client that mongoose is managing.
       Here we're saying, once we're done with our tests, drop the database because don't
       need it any more. */
    mongoose.connection.db.dropDatabase(function() {
      done();
    })
  });

  it('should should respond to a post request', function(done) {
    chai.request('localhost:3000/api/v1')
      .post('/notes')
      .send({noteBody: 'this is a test note'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('_id');
        expect(res.body.noteBody).to.eql('this is a test note');
        done();
      });
  });
});

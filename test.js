var chai = require('chai');
var expect = chai.expect
var telephoneWords = require('./index.js')


describe('telephoneWords tests', function() {
  it('telephoneWords should output an array', function() {
      expect(telephoneWords([2,3])).to.be.an('array');
  });
  it('telephoneWords should return an empty array if input is []', function() {
      expect(telephoneWords([])).to.eql([]);
  });
  it('telephoneWords should return BJs example output', function() {
      expect(telephoneWords([2,5])).to.eql(["AJ", "AK", "AL", "BJ", "BK", "BL", "CJ", "CK", "CL"]);
  });
});
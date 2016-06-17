/**
 * Created by vinside on 6/17/16.
 */
var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.not.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'object';
        });
      }
    });

    it('should contain "Some Some" ', function () {
      expect(starWars.all).to.include('Some Some');
    });
  });

  describe('random', function () {
    it('should return a random item from the starWars.all', function () {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function () {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        expect(starWars.all).to.include(item);
      });
    });
  });

});
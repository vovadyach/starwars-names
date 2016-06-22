'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Created by vinside on 6/17/16.
                                                                                                                                                                                                                                                   */

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('starwars-names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      (0, _chai.expect)(_index2.default.all).to.not.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
        });
      }
    });

    it('should contain "Some Some" ', function () {
      (0, _chai.expect)(_index2.default.all).to.include('Some Some');
    });
  });

  describe('random', function () {
    it('should return a random item from the starWars.all', function () {
      var randomItem = _index2.default.random();
      (0, _chai.expect)(_index2.default.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function () {
      var randomItems = _index2.default.random(3);
      (0, _chai.expect)(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        (0, _chai.expect)(_index2.default.all).to.include(item);
      });
    });
  });
});
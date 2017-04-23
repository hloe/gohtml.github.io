'use strict';

try {
  var data = require('../js/pow.js');
} catch (err) {}

try {
  describe("Test with positive numbers", function () {
    it("2 in pow 4 is", function () {
      var val = data.calculate(2, 4);
      expect(val).toEqual(16);
    });
  });

} catch (err) {}

try {
  describe("Test with negative numbers", function () {
    it("-2 in pow -1 is", function () {
      var val = data.calculate(-2, -1);
      expect(val).toEqual(-0.5);
    });
  });

} catch (err) {}

try {
  describe("Test with positive number in negative pow", function () {
    it("5 in pow -2 is", function () {
      var val = data.calculate(5, -2);
      expect(val).toEqual(0.04);
    });
  });

} catch (err) {}
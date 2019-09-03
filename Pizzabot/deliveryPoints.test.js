const assert = require('assert');
const DeliveryPoints = require('./deliveryPoints');

describe('DELIVERY POINTS TEST', function() {
  describe('EXTRACT DELIVERY POINTS TEST', function() {
    it('should return array of Point Objects when given array of numbers where odd elements represent x and even elements represent y', function() {
      var inputNumbers = [2, 3, 4, 2, 4, 4, 0, 0, 1, 2];
      var expectedOutput = [
        { x:2, y:3 },
        { x:4, y:2 },
        { x:4, y:4 },
        { x:0, y:0 },
        { x:1, y:2 },
      ];
      assert.deepEqual(expectedOutput, DeliveryPoints.extractDeliveryPoints(inputNumbers));
    });

    it('should return empty array of Point Objects', function() {
      var inputNumbers = [];
      var expectedOutput = [];
      assert.deepEqual(expectedOutput, DeliveryPoints.extractDeliveryPoints(inputNumbers));
    });

    it('should not return empty array when given input', function() {
      var inputNumbers = [2, 3];
      var expectedOutput = [];
      assert.notDeepEqual(expectedOutput, DeliveryPoints.extractDeliveryPoints(inputNumbers));
    });

    it('should not return different output value than the specified input', function() {
      var inputNumbers = [2, 3];
      var expectedOutput = [{ x:3, y:2}];
      assert.notDeepEqual(expectedOutput, DeliveryPoints.extractDeliveryPoints(inputNumbers));
    });
  });

  describe('CALCULATE MANHATTAN DISTANCE TEST', function() {
    it('should calculate shortest distance between start point 0,0 and end point 4,4', function() {
      var x1 = 0;
      var y1 = 0;
      var x2 = 4;
      var y2 = 4;
      var expectedOutput = 8;
      assert.equal(expectedOutput, DeliveryPoints.calculateManhattanDistance(x1, x2, y1, y2));
    });

    it('should calculate shortest distance between start point 0,0 and end point 0,0', function() {
      var x1 = 0;
      var y1 = 0;
      var x2 = 0;
      var y2 = 0;
      var expectedOutput = 0;
      assert.equal(expectedOutput, DeliveryPoints.calculateManhattanDistance(x1, x2, y1, y2));
    });

    it('should calculate shortest distance between start point 3,2 and end point 3,2', function() {
      var x1 = 3;
      var y1 = 2;
      var x2 = 3;
      var y2 = 2;
      var expectedOutput = 0;
      assert.equal(expectedOutput, DeliveryPoints.calculateManhattanDistance(x1, x2, y1, y2));
    });

    it('should calculate shortest distance between start point 0,0 and end point -4,-4', function() {
      var x1 = 0;
      var y1 = 0;
      var x2 = -4;
      var y2 = -4;
      var expectedOutput = 8;
      assert.equal(expectedOutput, DeliveryPoints.calculateManhattanDistance(x1, x2, y1, y2));
    });

    it('should calculate shortest distance between start point 3,2 and end point 0,0', function() {
      var x1 = 3;
      var y1 = 2;
      var x2 = 0;
      var y2 = 0;
      var expectedOutput = 5;
      assert.equal(expectedOutput, DeliveryPoints.calculateManhattanDistance(x1, x2, y1, y2));
    });
  });

  describe('FIND OPTIMAL DELIVERY POINT TEST', function() {
    it('should return the closest deliveryPoint when starting from 0,0', function() {
      var currentPoint = { x:0, y:0 };
      var deliveryPoints = [
        { x:3, y:1 },
        { x:4, y:1}
      ];
      var expectedOutput = [ { x:3, y:1 }];
      assert.deepEqual(expectedOutput, DeliveryPoints.findOptimalDeliveryPoint(currentPoint, deliveryPoints));
    });

    it('should return empty array when there are no delivery points', function() {
      var currentPoint = { x:0, y:0 };
      var deliveryPoints = [];
      var expectedOutput = [];
      assert.deepEqual(expectedOutput, DeliveryPoints.findOptimalDeliveryPoint(currentPoint, deliveryPoints));
    });

    it('should return the closest deliveryPoint when starting from 10,10', function() {
      var currentPoint = { x:10, y:10 };
      var deliveryPoints = [
        { x:3, y:1 },
        { x:4, y:1}
      ];
      var expectedOutput = [ { x:4, y:1 }];
      assert.deepEqual(expectedOutput, DeliveryPoints.findOptimalDeliveryPoint(currentPoint, deliveryPoints));
    });
  });
});
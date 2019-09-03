const assert = require('assert');
const Validate = require('./validate');
const expect = require('chai').expect;
require('mocha-sinon');

describe('VALIDATION TEST', function() {
  describe('VALIDATE STRING CONSTRUCTION TEST', function() {

    beforeEach(function() {
      this.sinon.stub(console, 'log');
      this.sinon.stub(process, 'exit');
    });

    var expectedOutput = "The input string containing the coordinates is invalid. Use this format where D represents a positive integer: DxD (D, D) (D, D)..."
  
    it('should give error message in console output and process.exit() when input string is random text', function() {
      var inputString = "giberish";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string is missing coordinates', function() {
      var inputString = "5x5";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string is missing x or y coordinates', function() {
      var inputString = "5x5 (2, 2) (4)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string is missing gird size', function() {
      var inputString = "(5, 2) (3, 3)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string is missing gird size delimeter x', function() {
      var inputString = "5,5 (4, 2) (3, 3)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string has additional text appended', function() {
      var inputString = "5x5 (4, 2) (3, 3) test";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string has numbers that are not integer', function() {
      var inputString = "5x5 (4, 2) (3, 3.13)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when input string has negative numbers', function() {
      var inputString = "5x5 (-4, 2) (3, 3)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });


    it('shouldn\'t give error message in console output and process.exit() when input is correct', function() {
      var inputString = "5x5 (4, 2) (3, 3)";
      Validate.validateStringConstruction(inputString);
      expect(process.exit.called).to.be.false;
      expect(console.log.calledOnce).to.be.false;
      expect(console.log.calledWith(expectedOutput)).to.be.false;
    });
  });

  describe('FROM STRING TO INTEGERS TEST', function() {  
    it('should extract the digits from the string and return array of them', function() {
      var inputString = "5x5 (4, 2) (2, 4)";
      var expectedOutput = [5, 5, 4, 2, 2, 4];
      var output = Validate.fromStringToIntegers(inputString);
      assert.deepEqual(expectedOutput, output);
    });

    it('should return 1 element array when given string that contains 1 digit', function() {
      var inputString = "Number t2wo to be extracted";
      var expectedOutput = [2];
      var output = Validate.fromStringToIntegers(inputString);
      assert.deepEqual(expectedOutput, output);
    });

    it('should return 3 element array when given string that contains 3 digit', function() {
      var inputString = "Number t2wo to 3be extracted1";
      var expectedOutput = [2, 3, 1];
      var output = Validate.fromStringToIntegers(inputString);
      assert.deepEqual(expectedOutput, output);
    });
  });

  describe('VALIDATE COORDINATES IN GRID SIZE TEST', function() {

    beforeEach(function() {
      this.sinon.stub(console, 'log');
      this.sinon.stub(process, 'exit');
    });

    it('should give error message in console output and process.exit() when input x-coordinate 6 is larger than grid size 5', function() {
      var inputNumbers = [5, 5, 4, 2, 1, 1, 6, 2];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
    });

    it('should give error message in console output and process.exit() when input x-coordinate 5 is larger than grid size 5', function() {
      var inputNumbers = [5, 5, 4, 2, 1, 1, 5, 2];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
    });

    it('should give error message in console output and process.exit() when input y-coordinate 6 is larger than grid size 5', function() {
      var inputNumbers = [5, 5, 4, 2, 1, 1, 4, 6];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
    });

    it('should give error message in console output and process.exit() when input y-coordinate 5 is larger than grid size 5', function() {
      var inputNumbers = [5, 5, 4, 2, 1, 1, 4, 5];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
    });

    it('should give error message in console output and process.exit() when grid size for X and Y axis is smaller than 1', function() {
      var inputNumbers = [0, 0, 0, 0];
      var expectedOutput = "Please use grid size that is larger than 0!"
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('shouldn\'t give error message in console output and process.exit() when grid size for X and Y axis size is 1', function() {
      var inputNumbers = [1, 1, 0, 0];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.false;
      expect(console.log.calledOnce).to.be.false;
    });

    it('shouldn\'t give error message in console output and process.exit() when grid size for X is more than 1 and Y axis size is 1', function() {
      var inputNumbers = [10, 1, 9, 0];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.false;
      expect(console.log.calledOnce).to.be.false;
    });

    it('shouldn\'t give error message in console output and process.exit() when grid size for X is 1 and Y axis size is more than 1', function() {
      var inputNumbers = [1, 10, 0, 9];
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.false;
      expect(console.log.calledOnce).to.be.false;
    });

    it('should give error message in console output and process.exit() when grid size for X axis is smaller than 1 and Y axis size is 1', function() {
      var inputNumbers = [0, 1, 0, 0];
      var expectedOutput = "Please give positive grid size for the X axis!"
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });

    it('should give error message in console output and process.exit() when grid size for X axis is 1 and Y axis size is smaller than 1', function() {
      var inputNumbers = [1, 0, 0, 0];
      var expectedOutput = "Please give positive grid size for the Y axis!"
      Validate.validateCoordinatesInGridSize(inputNumbers);
      expect(process.exit.called).to.be.true;
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(expectedOutput)).to.be.true;
    });
  });
});
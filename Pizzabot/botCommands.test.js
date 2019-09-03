const assert = require('assert');
const Commands = require('./botCommands');

describe('BOT COMMANDS TEST', function() {
  describe('DROP PIZZA TEST', function() {
    it('should return D when appened on empty string', function() {
      assert.equal("D", Commands.dropPizza(""));
    });

    it('should return D when appened on command string', function() {
      assert.equal("THISISATESTD", Commands.dropPizza("THISISATEST"));
    });
  });
  
  describe('NAVIGATION TEST', function() {
    it('should return navigation path from 0,0 to 1,3', function() {
      var start = { x:0, y:0 };
      var end = { x:1, y:3 };
      assert.equal("ENNND", Commands.navigate(start, end));
    });

    it('should return navigation path from 0,0 to 0,10', function() {
      var start = { x:0, y:0 };
      var end = { x:0, y:10 };
      assert.equal("NNNNNNNNNND", Commands.navigate(start, end));
    });

    it('should return navigation path from 0,10 to 0,0', function() {
      var start = { x:0, y:10 };
      var end = { x:0, y:0 };
      assert.equal("SSSSSSSSSSD", Commands.navigate(start, end));
    });

    it('should return navigation path from 0,0 to 10,0', function() {
      var start = { x:0, y:0 };
      var end = { x:10, y:0 };
      assert.equal("EEEEEEEEEED", Commands.navigate(start, end));
    });

    it('should return navigation path from 10,0 to 0,0', function() {
      var start = { x:10, y:0 };
      var end = { x:0, y:0 };
      assert.equal("WWWWWWWWWWD", Commands.navigate(start, end));
    });

    it('should return navigation path from 0,0 to 4,4', function() {
      var start = { x:0, y:0 };
      var end = { x:4, y:4 };
      assert.equal("EEEENNNND", Commands.navigate(start, end));
    });

    it('should return navigation path from 4,4 to 0,0', function() {
      var start = { x:4, y:4 };
      var end = { x:0, y:0 };
      assert.equal("WWWWSSSSD", Commands.navigate(start, end));
    });

    it('should return navigation path from 1,1 to -1,-1, because no grid constraints enforced', function() {
      var start = { x:1, y:1 };
      var end = { x:-1, y:-1 };
      assert.equal("WWSSD", Commands.navigate(start, end));
    });
    
    it('should return navigation path from 2,1 to 3,3', function() {
      var start = { x:2, y:1 };
      var end = { x:3, y:3 };
      assert.equal("ENND", Commands.navigate(start, end));
    });
  });
});


var Commands = require('./botCommands.js');
var Validate = require('./validate.js');
var DeliveryPoints = require('./deliveryPoints');

process.argv.shift();  // skip node
process.argv.shift();  // skip name of js file
var inputString = process.argv.shift();

Validate.validateStringConstruction(inputString);
var inputNumbers = Validate.fromStringToIntegers(inputString);
Validate.validateCoordinatesInGridSize(inputNumbers);

var deliveryPoints = DeliveryPoints.extractDeliveryPoints(inputNumbers);
currentPosition = { x: 0, y: 0};
resultBuilder = "";

while (deliveryPoints.length !== 0) {
    let nextDeliveryPoint = DeliveryPoints.findOptimalDeliveryPoint(currentPosition, deliveryPoints);
    nextDeliveryPoint = nextDeliveryPoint[0];
    resultBuilder += Commands.navigate(currentPosition, nextDeliveryPoint);
}

console.log(resultBuilder);
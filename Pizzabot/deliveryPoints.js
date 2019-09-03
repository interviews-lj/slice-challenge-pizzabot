function extractDeliveryPoints(inputNumbers) {
    let points = [];

    for (i = 0; i < inputNumbers.length; i+=2) {
        points.push({
            x: inputNumbers[i],
            y: inputNumbers[i + 1]
        })
    }
    return points;
}

function calculateManhattanDistance(x1, x2, y1, y2) {
    // Manhattan Distance is calculated by the formula|x1 - x2| + |y1 - y2|
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// Using Min Manhattan Distance Algorithm
function findOptimalDeliveryPoint(currentPosition, deliveryPoints) {
    let x1 = currentPosition.x;
    let y1 = currentPosition.y;

    let nextPoint = 0;
    let minDistance = Number.MAX_SAFE_INTEGER;
loop:   for (i = 0; i < deliveryPoints.length; i++) {
        let x2 = deliveryPoints[i].x;
        let y2 = deliveryPoints[i].y;

        let manhattanDistance = calculateManhattanDistance(x1, x2, y1, y2)
        if (manhattanDistance === 0) {
            nextPoint = i;
            break loop;
        } else if (manhattanDistance < minDistance) {
            nextPoint = i;
            minDistance = manhattanDistance;
        }
    }
    return deliveryPoints.splice(nextPoint, 1);
}

module.exports = {
    extractDeliveryPoints,
    calculateManhattanDistance,
    findOptimalDeliveryPoint
}
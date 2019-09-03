function dropPizza(commands) {
    return commands += "D"
}

function navigate(currentPosition, nextDeliveryPoint) {
    let navigationCommands = "";
    const x1 = currentPosition.x;
    const y1 = currentPosition.y;
    const x2 = nextDeliveryPoint.x;
    const y2 = nextDeliveryPoint.y;

    navigationCommands += Array(Math.abs(x1 - x2) + 1).join(x1 > x2 ? "W" : "E");
    navigationCommands += Array(Math.abs(y1 - y2) + 1).join(y1 > y2 ? "S" : "N");

    currentPosition.x = x2;
    currentPosition.y = y2;

    return dropPizza(navigationCommands)
}

module.exports = {
    dropPizza,
    navigate
};
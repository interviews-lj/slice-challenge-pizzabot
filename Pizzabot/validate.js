function validateStringConstruction(inputString) {
    const validRegex = /^\d+x\d+( \(\d+, \d+\))+$/;
    if (!validRegex.test(inputString)) {
        console.log("The input string containing the coordinates is invalid. Use this format where D represents a positive integer: DxD (D, D) (D, D)...")
        process.exit()
    }
}

function fromStringToIntegers(inputString) {
    let inputNumbers = inputString.match(/-?\d+/g).map(element => {
        return parseInt(element, 10);
    });
    return inputNumbers;
}

function validateCoordinatesInGridSize(inputNumbers) {

    const xLength = inputNumbers.shift() - 1; // subtract 1 because grid starts from 0
    const yLength = inputNumbers.shift() - 1; // subtract 1 because grid starts from 0

    if (xLength <= -1 && yLength <= -1) {
        console.log("Please use grid size that is larger than 0!");
        process.exit();
    } else if (xLength <= -1 && yLength > -1) {
        console.log("Please give positive grid size for the X axis!");
        process.exit();
    } else if (xLength > -1 && yLength <= -1) {
        console.log("Please give positive grid size for the Y axis!");
        process.exit();
    } else {
        for (i = 0; i < inputNumbers.length; i+=2) {
            if (inputNumbers[i] > xLength) {
                console.log("Please use values that don't exceed the grid size. You are using", inputNumbers[i], "as a value for the X-axis in a grid size of", xLength + 1, "that starts counting from 0!");
                process.exit();
            }
        }
    
        for (i = 1; i < inputNumbers.length; i+=2) {
            if (inputNumbers[i] > yLength) {
                console.log("Please use values that don't exceed the grid size. You are using", inputNumbers[i], "as a value for the Y-axis in a grid size of", yLength + 1, "that starts counting from 0!");
                process.exit();
            }
        }
    }
}

module.exports = {
    validateStringConstruction,
    fromStringToIntegers,
    validateCoordinatesInGridSize
};
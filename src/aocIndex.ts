const fs = require('node:fs');

export function aoc1(fileName: string): number {
    var totalDifference = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")
    
    var firstNumbers: number[] = []
    var secondNumbers: number[]  = []

    file.forEach((line: string) => {
        var numbers = line.split("   ")
        var lineFirstNumber = parseInt(numbers[0])
        var lineSecondNumber = parseInt(numbers[1])
        firstNumbers.push(lineFirstNumber)
        secondNumbers.push(lineSecondNumber)
    });

    var firstNumbersOrdered = firstNumbers.sort()
    var secondNumbersOrdered = secondNumbers.sort()
    for (let i = 0; i < firstNumbersOrdered.length; i++) {
        var firstNumber = firstNumbersOrdered[i]
        var secondNumber = secondNumbersOrdered[i]
        var difference = (firstNumber > secondNumber) ? firstNumber - secondNumber : secondNumber - firstNumber
        totalDifference += difference 
    }

    return totalDifference
}
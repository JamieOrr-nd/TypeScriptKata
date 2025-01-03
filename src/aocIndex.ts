const fs = require('node:fs');

export function Day1Part1(fileName: string): number {
    var totalDifference = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")

    var firstNumbers: number[] = []
    var secondNumbers: number[] = []

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

export function Day1Part2(fileName: string): number {
    var similarityScore = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")

    var firstNumbers: number[] = []
    var secondNumbers: number[] = []

    file.forEach((line: string) => {
        var numbers = line.split("   ")
        var lineFirstNumber = parseInt(numbers[0])
        var lineSecondNumber = parseInt(numbers[1])
        firstNumbers.push(lineFirstNumber)
        secondNumbers.push(lineSecondNumber)
    });

    for (let i = 0; i < firstNumbers.length; i++) {
        var firstNumber = firstNumbers[i]
        var firstNumberOccurrences = secondNumbers.filter((x: number) => x === firstNumber).length
        similarityScore += (firstNumber * firstNumberOccurrences)
    }

    return similarityScore
}

export function Day2(report: number[]): number {
    var safeReport = 1
    var reportLength = report.length
    var firstNumber = report[0]
    var lastNumber = report[reportLength - 1]
    var overallChange = ((lastNumber - firstNumber) > 0) ? 1 : -1

    for (let i = 1; i < report.length; i++) {
        var previousNumber = report[i - 1]
        var currentNumber = report[i]
        var currentChange = (currentNumber - previousNumber) * overallChange
        // Is the currentChange less than 1 or greater than 3?
        if ((currentChange < 1) || (currentChange > 3)) {
            safeReport = 0
        }
    }

    return safeReport
}

export function Day2Part1(fileName: string): number {
    var safeReports = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")

    var reports: number[][] = []

    file.forEach((line: string) => {
        var report = line.split(" ").map(Number)
        reports.push(report)
    });

    reports.forEach((report: number[]) => {
        safeReports += Day2(report)
    });

    return safeReports
}

export function Day2Part2(fileName: string): number {
    var safeReports = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")

    var reports: number[][] = []

    file.forEach((line: string) => {
        var report = line.split(" ").map(Number)
        reports.push(report)
    });

    reports.forEach((report: number[]) => {
        var safeReport = 0
        var reportLength = report.length

        // Judge safety of all elements
        safeReport = (Day2(report) > 0) ? 1 : safeReport

        // Judge safety without first element
        var reportWithoutFirst = report.slice(-reportLength + 1)
        safeReport = (Day2(reportWithoutFirst) > 0) ? 1 : safeReport

        // Judge safety without last element
        var reportWithoutLast = report.slice(0, reportLength - 1)
        safeReport = (Day2(reportWithoutLast) > 0) ? 1 : safeReport

        // Judge safety of all other elements
        for (let i = 1; i < reportLength; i++) {
            var filteredReport = report.slice(0, i).concat(report.slice(i + 1))
            safeReport = (Day2(filteredReport) > 0) ? 1 : safeReport
        }

        safeReports += safeReport
    });

    return safeReports
}

export function Day3Part1(fileName: string): number {
    var total = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")
    var completeString = ""

    file.forEach((line: string) => {
        completeString += line
    });

    var regexPattern = /mul\((\d|\d\d|\d\d\d),(\d|\d\d|\d\d\d)\)/g
    var validMultiples = completeString.match(regexPattern)

    if (validMultiples !== null) {
        validMultiples.forEach((multiple: string) => {
            var numbers: string[] = multiple.split(",")
            var firstNumber = parseInt(numbers[0].slice(4), 10)
            var secondNumber = parseInt(numbers[1].slice(0, -1), 10)

            if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
                total += (firstNumber * secondNumber)
            }
            else {
                total += 0
            }
        })
    }

    return total
}

export function Day3Part2(fileName: string): number {
    var total = 0;
    var inputPath = `./src/aocInputs/${fileName}`;
    var file = fs.readFileSync(inputPath, 'utf8').split("\n")
    var completeString = ""

    file.forEach((line: string) => {
        completeString += line
    });

    var regexPattern = /(mul\((\d|\d\d|\d\d\d),(\d|\d\d|\d\d\d)\))|(do\(\)|don't\(\))/g
    var validMultiples = completeString.match(regexPattern)
    var doAllowed = true

    if (validMultiples !== null) {
        validMultiples.forEach((multiple: string) => {
            if (doAllowed) {
                if (multiple === "don't()") {
                    doAllowed = false
                }
                else if (multiple !== "do()") {
                    var numbers: string[] = multiple.split(",")
                    var firstNumber = parseInt(numbers[0].slice(4), 10)
                    var secondNumber = parseInt(numbers[1].slice(0, -1), 10)

                    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
                        total += (firstNumber * secondNumber)
                    }
                    else {
                        total += 0
                    }
                }
            }
            else {
                if (multiple === "do()") {
                    doAllowed = true
                }
            }
        })
    }

    return total
}

export function Day4Part1(fileName: string): number {
    return 0
}

export function Day4Part2(fileName: string): number {
    return 0
}

export function Day5Part1(fileName: string): number {
    return 0
}

export function Day5Part2(fileName: string): number {
    return 0
}
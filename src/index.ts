export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

// CodeWars: Stop gninnipS My sdroW!
export function reverseFiveLetterWords(sentence: string): string {
    let result = ""
    let words = sentence.split(" ")
    words.forEach(word => {
        if (word.length >= 5) {
            for(let i = (word.length - 1); i >= 0; i--) {
                result += word[i]
            }
            result += " "
        } else {
            result += (word + " ") 
        } 
    });
    return result.trim()
}

// CodeWars: Jaden Casing Strings
export function toJadenCase(sentence: string): string {
    let result = sentence.split(" ").map(word => word[0].toString().toUpperCase() + (word.slice(1))).join(" ")
    return result
}
 
// CodeWars: Roman Numerals Decoder
export function romanNumeralsDecoder(numeral: string): number {
    const numeralLetters = ["I", "V", "X", "L", "C", "D", "M"]
    const numeralNumbers = [1, 5, 10, 50, 100, 500, 1000]
    
    let currentComposite = ""
    let currentCompositeTotal = 0
    let currentTotal = 0
    
    for (let i = 0; i < numeral.length; i++) {
        let currentNumeral = numeral[i]
        let numeralIndex = numeralLetters.indexOf(currentNumeral)
        let numeralNumber = numeralNumbers[numeralIndex]
        
        if (currentComposite == "") {
            currentComposite = currentNumeral
            currentCompositeTotal += numeralNumber
        }
        else if (numeralNumber <= currentCompositeTotal && currentNumeral == currentComposite) {
            currentCompositeTotal += numeralNumber
        }
        else if (numeralNumber > currentCompositeTotal) {
            currentTotal += (numeralNumber - currentCompositeTotal)
            currentComposite = ""
            currentCompositeTotal = 0
        }
        else {
            currentTotal += currentCompositeTotal
            currentComposite = currentNumeral
            currentCompositeTotal = numeralNumber
        }
    }
    currentTotal += currentCompositeTotal
    
    return currentTotal
}

// CodeWars: Roman Numerals Encoder
export function romanNumeralsEncoder(number: number): string {
    const numerals: Record<number, string> = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }
    
    let numberSplit = number.toString().split('').reverse()
    let resultArray = []

    for (let i = 0; i < numberSplit.length; i++) {
        let currentNumber = parseInt(numberSplit[i])
        let currentSize = 10 ** i
        if (currentNumber < 4) {
            let currentResult = numerals[currentSize].repeat(currentNumber) 
            resultArray.push(currentResult)
        }
        else if (currentNumber == 4) {
            let currentResult = numerals[currentSize] + numerals[currentSize * 5] 
            resultArray.push(currentResult)
        }
        else if (currentNumber >= 5 && currentNumber < 9) {
            let currentResult = numerals[currentSize * 5] + (numerals[currentSize].repeat(currentNumber - 5))
            resultArray.push(currentResult)
        }
        else {
            let currentResult = numerals[currentSize] + numerals[currentSize * 10]
            resultArray.push(currentResult)
        }
    }
    
    let result = resultArray.reverse().join('') 
    return result
}
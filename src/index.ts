export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

// CodeWars Stop gninnipS My sdroW!
export function reverseFiveLetterWords(sentence: string): string {
    let result = ""
    if (sentence.length >= 5) {
        for(let i = (sentence.length - 1); i >= 0; i--) {
            result += sentence[i]
        }
    } else {
        result = sentence
    }
    return result
}
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
  
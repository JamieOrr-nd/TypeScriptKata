import { add, countVowels, reverseFiveLetterWords, romanNumeralsDecoder, romanNumeralsEncoder, rot13, toJadenCase } from '../src/index';

// describe('Example: Add numbers', () => {
//   test('empty string should result in zero', () => {
//     expect(add('')).toBe(0);
//   });
// });

// describe('CodeWars: Stop gninnipS My sdroW!', () => {
//   test('Empty string', () => {
//     expect(reverseFiveLetterWords('')).toBe('');
//   });
//   test('Single, no reversal', () => {
//     expect(reverseFiveLetterWords('the')).toBe('the');
//   });
//   test('Single, one reversal', () => {
//     expect(reverseFiveLetterWords('their')).toBe('rieht');
//   });
//   test('Multiple, no reversal', () => {
//     expect(reverseFiveLetterWords('the box')).toBe('the box');
//   });
//   test('Multiple, one reversal', () => {
//     expect(reverseFiveLetterWords('their box')).toBe('rieht box');
//   });
//   test('Multiple, two reversals', () => {
//     expect(reverseFiveLetterWords('their boxes')).toBe('rieht sexob');
//   });
// });

// describe('CodeWars: Jaden Casing Strings', () => {
//   test('Single, capitalised', () => {
//     expect(toJadenCase('Jamie')).toBe('Jamie');
//   });
//   test('Single, not capitalised', () => {
//     expect(toJadenCase('jamie')).toBe('Jamie');
//   });
//   test('Multiple, capitalised', () => {
//     expect(toJadenCase('Jamie Orr')).toBe('Jamie Orr');
//   });
//   test('Multiple, not capitalised', () => {
//     expect(toJadenCase('jamie orr')).toBe('Jamie Orr');
//   });
// });

// describe('CodeWars: Roman Numerals Decoder', () => {
//   test('Single numeral, I', () => {
//     expect(romanNumeralsDecoder('I')).toBe(1);
//   });
//   test('Single numeral, V', () => {
//     expect(romanNumeralsDecoder('V')).toBe(5);
//   });
//   test('Simple multiple numeral, VI', () => {
//     expect(romanNumeralsDecoder('VI')).toBe(6);
//   });
//   test('Simple multiple numeral, MM', () => {
//     expect(romanNumeralsDecoder('MM')).toBe(2000);
//   });
//   test('Composite multiple numeral, IV', () => {
//     expect(romanNumeralsDecoder('IV')).toBe(4);
//   });
//   test('Composite multiple numeral, XIV', () => {
//     expect(romanNumeralsDecoder('XIV')).toBe(14);
//   });
//   test('Composite multiple numeral, MDCLXVI', () => {
//     expect(romanNumeralsDecoder('MDCLXVI')).toBe(1666);
//   });
// });

// describe('CodeWars: Roman Numerals Encoder', () => {
//   test('Single letter, I', () => {
//     expect(romanNumeralsEncoder(1)).toBe("I")
//   })
//   test('Simple multiple letters, II', () => {
//     expect(romanNumeralsEncoder(2)).toBe("II")
//   })
//   test('Composite multiple letters, IV', () => {
//     expect(romanNumeralsEncoder(4)).toBe("IV")
//   })
//   test('Composite multiple letters, MMMCMXCIX', () => {
//     expect(romanNumeralsEncoder(3999)).toBe("MMMCMXCIX")
//   })
// })

// describe('CodeWars: Vowel Count', () => {
//   test('Single letter, no vowels present', () => {
//     expect(countVowels("b")).toBe(0)
//   })
//   test('Single letter, vowels present', () => {
//     expect(countVowels("a")).toBe(1)
//   })
//   test('Multiple letters, no vowels present', () => {
//     expect(countVowels("bb")).toBe(0)
//   })
//   test('Multiple letters, vowels present', () => {
//     expect(countVowels("ab")).toBe(1)
//   })
// })

describe('CodeWars: ROT13', () => {
  test('One character, first half', () => {
    expect(rot13("a")).toBe("n")
  })
  test('One character, second half', () => {
    expect(rot13("n")).toBe("a")
  })
  test('One character, non-alphabetic', () => {
    expect(rot13("1")).toBe("1")
  })
  test('Multiple characters, all types', () => {
    expect(rot13("an1")).toBe("na1")
  })
  test('Multiple characters, caps', () => {
    expect(rot13("AN")).toBe("NA")
  })
})
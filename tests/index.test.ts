import { add, reverseFiveLetterWords, toJadenCase } from '../src/index';

describe('Example: Add numbers', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
});

describe('CodeWars: Stop gninnipS My sdroW!', () => {
  test('Empty string', () => {
    expect(reverseFiveLetterWords('')).toBe('');
  });
  test('Single, no reversal', () => {
    expect(reverseFiveLetterWords('the')).toBe('the');
  });
  test('Single, one reversal', () => {
    expect(reverseFiveLetterWords('their')).toBe('rieht');
  });
  test('Multiple, no reversal', () => {
    expect(reverseFiveLetterWords('the box')).toBe('the box');
  });
  test('Multiple, one reversal', () => {
    expect(reverseFiveLetterWords('their box')).toBe('rieht box');
  });
  test('Multiple, two reversals', () => {
    expect(reverseFiveLetterWords('their boxes')).toBe('rieht sexob');
  });
});

describe('CodeWars: Jaden Casing Strings', () => {
  test('Single, capitalised', () => {
    expect(toJadenCase('Jamie')).toBe('Jamie');
  });
  test('Single, not capitalised', () => {
    expect(toJadenCase('jamie')).toBe('Jamie');
  });
  test('Multiple, capitalised', () => {
    expect(toJadenCase('Jamie Orr')).toBe('Jamie Orr');
  });
  test('Multiple, not capitalised', () => {
    expect(toJadenCase('jamie orr')).toBe('Jamie Orr');
  });
});
import { add } from '../src/index';
import { reverseFiveLetterWords } from '../src/index';

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
});
import * as aocCode from "../src/aocIndex"

describe('Day 1', () => {
  test('Test File', () => {
    var actual = aocCode.aoc1("day1Test.txt")
    var expected = 10
    expect(actual).toBe(expected)
  })
  test('Real File', () => {
    var actual = aocCode.aoc1("day1.txt")
    var expected = 0
    expect(actual).toBe(expected)
  })
})
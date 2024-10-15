import {
  allElementsHaveEvenNumberOfDigits,
  allNumbersHaveDistinctDigits,
  areAllElementsDistinct,
  areAllElementsEven,
  areAllElementsMultiplesOfLast,
  areArraysEqual,
  areElementsInInterval,
  areEvenNumbersSorted,
  isAlternatingArray,
  isSortedAscending,
} from ".";

describe("property-checking", () => {
  test("areAllElementsEven", () => {
    expect(areAllElementsEven([2, 4, 6])).toBe(true);
    expect(areAllElementsEven([2, 3, 6])).toBe(false);
    expect(areAllElementsEven([1, 2, 3])).toBe(false);
  });

  test("areAllElementsDistinct", () => {
    expect(areAllElementsDistinct([1, 2, 3, 4])).toBe(true);
    expect(areAllElementsDistinct([1, 2, 2, 3])).toBe(false);
    expect(areAllElementsDistinct([1, 2, 3, 1])).toBe(false);
  });

  test("isSortedAscending", () => {
    expect(isSortedAscending([1, 2, 3, 4])).toBe(true);
    expect(isSortedAscending([1, 2, 2, 3])).toBe(true);
    expect(isSortedAscending([1, 2, 3, 1])).toBe(false);
  });

  test("areEvenNumbersSorted", () => {
    expect(areEvenNumbersSorted([1, 2, 3, 4])).toBe(true);
    expect(areEvenNumbersSorted([1, 2, 2, 3, 6, 8])).toBe(true);
    expect(areEvenNumbersSorted([1, 2, 3, 1, 4, 2])).toBe(false);
  });

  test("allElementsHaveEvenNumberOfDigits", () => {
    expect(allElementsHaveEvenNumberOfDigits([12, 345, 6789])).toBe(false);
    expect(allElementsHaveEvenNumberOfDigits([12, 34, 6789])).toBe(true);
  });

  test("areAllElementsMultiplesOfLast", () => {
    expect(areAllElementsMultiplesOfLast([6, 12, 18, 3])).toBe(true);
    expect(areAllElementsMultiplesOfLast([6, 12, 18, 4])).toBe(false);
  });

  test("isAlternatingArray", () => {
    expect(isAlternatingArray([0, 1, 0, 1])).toBe(true);
    expect(isAlternatingArray([0, 1, 1, 0])).toBe(false);
  });

  test("areArraysEqual", () => {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(areArraysEqual([1, 2, 3, 3], [3, 2, 1, 1])).toBe(false);
    expect(areArraysEqual([1, 2, 3], [1, 3, 4])).toBe(false);
  });

  test("areAllElementsMultiplesOfLast", () => {
    expect(areElementsInInterval([3, 5, 6, 9])).toEqual(true);
    expect(areElementsInInterval([3, 5, 46, 9])).toEqual(false);
    expect(areElementsInInterval([9, 5, 6, 3])).toEqual(true);
  });
  test("areAllElementsMultiplesOfLast", () => {
    expect(allNumbersHaveDistinctDigits([123, 456, 789])).toEqual(true);
    expect(allNumbersHaveDistinctDigits([112, 556, 889])).toEqual(false);
  });
});

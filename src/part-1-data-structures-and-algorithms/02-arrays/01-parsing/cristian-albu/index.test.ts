import {
  absoluteDifferenceEvenOddCount,
  convertTemperaturesToFahrenheit,
  countElementsEqualToDifference,
  countWordsInStories,
  displayMultiplesOfLastElement,
  findMaxAndMin,
  isMountainNumber,
  parseCsvData,
  parseNumbers,
  replaceLastPrimeWithZero,
} from ".";

describe("parsing", () => {
  describe("parseNumbers", () => {
    test("normal cases", () => {
      expect(parseNumbers(["1", "2", "3"])).toEqual([1, 2, 3]);
      expect(parseNumbers(["5", "4", "1"])).toEqual([5, 4, 1]);
    });
    test("edge cases", () => {
      expect(parseNumbers([])).toEqual([]);
      expect(parseNumbers(["1", "5", "a"])).toEqual([1, 5]);
    });
  });

  describe("convertTemperaturesToFahrenheit", () => {
    test("normal cases", () => {
      expect(convertTemperaturesToFahrenheit(["0", "100"])).toEqual(["32", "212"]);
    });
    test("edge cases", () => {
      expect(convertTemperaturesToFahrenheit([])).toEqual([]);
      expect(convertTemperaturesToFahrenheit(["100", "a"])).toEqual(["212"]);
    });
  });

  describe("parseCsvData", () => {
    test("normal cases", () => {
      expect(parseCsvData(["name,age", "Alice,30", "Bob,25"])).toEqual([
        ["name", "age"],
        ["Alice", "30"],
        ["Bob", "25"],
      ]);
    });
    test("edge cases", () => {
      expect(parseCsvData([])).toEqual([]);
      expect(parseCsvData(["name", "age"])).toEqual([["name"], ["age"]]);
      expect(parseCsvData(["first,second", "Alice", "Bob"])).toEqual([["first", "second"], ["Alice"], ["Bob"]]);
    });
  });

  describe("countWordsInStories", () => {
    test("normal cases", () => {
      expect(countWordsInStories(["Once upon a time", "In a galaxy far, far away"])).toEqual([4, 6]);
    });
    test("edge cases", () => {
      expect(countWordsInStories(["Once upon a time", ""])).toEqual([4, 0]);
      expect(countWordsInStories(["Once upon a time", "word"])).toEqual([4, 1]);
      expect(countWordsInStories(["One word"])).toEqual([2]);
    });
  });

  describe("absoluteDifferenceEvenOddCount", () => {
    test("normal cases", () => {
      expect(absoluteDifferenceEvenOddCount([1, 2, 3, 4])).toEqual(0);
      expect(absoluteDifferenceEvenOddCount([1, 2, 3, 7])).toEqual(2);
      expect(absoluteDifferenceEvenOddCount([1, 2, 6, 4])).toEqual(2);
    });
  });

  describe("replaceLastPrimeWithZero", () => {
    test("normal cases", () => {
      expect(replaceLastPrimeWithZero([4, 6, 5, 8, 11])).toEqual([4, 6, 5, 8, 0]);
      expect(replaceLastPrimeWithZero([4, 6, 5, 8, 12])).toEqual([4, 6, 0, 8, 12]);
      expect(replaceLastPrimeWithZero([2])).toEqual([0]);
      expect(replaceLastPrimeWithZero([3, 6, 28, 8, 12])).toEqual([0, 6, 28, 8, 12]);
    });
  });

  describe("displayMultiplesOfLastElement", () => {
    test("normal cases", () => {
      expect(displayMultiplesOfLastElement([3, 6, 9, 12, 4])).toEqual([12]);
      expect(displayMultiplesOfLastElement([3, 6, 9, 12, 3])).toEqual([3, 6, 9, 12]);
      expect(displayMultiplesOfLastElement([2, 3, 4, 5, 1])).toEqual([2, 3, 4, 5]);
      expect(displayMultiplesOfLastElement([1, 2, 3, 4, 5, 50])).toEqual([]);
    });
  });

  describe("findMaxAndMin", () => {
    test("normal cases", () => {
      expect(findMaxAndMin([3, 7, 2, 9, 4])).toStrictEqual({ min: 2, max: 9 });
      expect(findMaxAndMin([2, 2, 2, 2])).toStrictEqual({ min: 2, max: 2 });
      expect(findMaxAndMin([-1, 2, 5, 13, 59])).toStrictEqual({ min: -1, max: 59 });
    });
  });

  describe("countElementsEqualToDifference", () => {
    test("normal cases", () => {
      expect(countElementsEqualToDifference([3, 7, 2, 9, 4])).toBe(1);
      expect(countElementsEqualToDifference([1, 3, 5, 7, 9])).toBe(0);
      expect(countElementsEqualToDifference([6, 10, 14, 10, 4])).toBe(2);

      expect(countElementsEqualToDifference([5, 10])).toBe(1);
    });

    test("edge cases", () => {
      expect(countElementsEqualToDifference([])).toBe(0);
    });
  });

  describe("isMountainNumber", () => {
    test("normal cases", () => {
      expect(isMountainNumber([1, 3, 5, 4, 2])).toBe(true);
      expect(isMountainNumber([1, 3, 1, 4, 2])).toBe(false);
      expect(isMountainNumber([1, 2, 3, 4, 5])).toBe(false);
      expect(isMountainNumber([1, 2, 3, 3, 2, 1])).toBe(false);
      expect(isMountainNumber([5, 4, 3, 2, 1])).toBe(false);
      expect(isMountainNumber([1])).toBe(false);
      expect(isMountainNumber([2, 1])).toBe(false);
    });
  });
});

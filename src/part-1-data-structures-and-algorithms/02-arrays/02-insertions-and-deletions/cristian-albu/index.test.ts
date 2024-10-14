import {
  insertAtIndex,
  insertDoubleAfterEven,
  insertSquareRootBeforePerfectSquare,
  popExample,
  pushExample,
  removeEvenNumbers,
  removeFromIndex,
  removePrimeNumbers,
  shiftExample,
  unshiftExample,
} from ".";

describe("insertions and deletions", () => {
  describe("push", () => {
    test("normal cases", () => {
      expect(pushExample([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("pop", () => {
    test("normal cases", () => {
      expect(popExample([1, 2, 3, 4])).toStrictEqual({ modifiedArray: [1, 2, 3], removedNumber: 4 });
    });
  });

  describe("shift", () => {
    test("normal cases", () => {
      expect(shiftExample([1, 2, 3, 4])).toStrictEqual({ modifiedArray: [2, 3, 4], removedNumber: 1 });
    });
  });

  describe("unshift", () => {
    test("normal cases", () => {
      expect(unshiftExample([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("insertAtIndex", () => {
    test("normal cases", () => {
      expect(insertAtIndex([1, 2, 4], 3, 2)).toEqual([1, 2, 3, 4]);
    });

    test("edge cases", () => {
      expect(insertAtIndex([2, 3, 4], 1, 0)).toEqual([1, 2, 3, 4]);
      expect(insertAtIndex([1, 2, 3], 4, 3)).toEqual([1, 2, 3, 4]);
      expect(insertAtIndex([1, 2, 3], 4, 4)).toEqual([1, 2, 3, undefined, 4]);
      expect(insertAtIndex([1, 2, 3], 4, -1)).toEqual([1, 2, 3]);
    });
  });

  describe("removeFromIndex", () => {
    test("normal cases", () => {
      expect(removeFromIndex([1, 2, 3, 4], 2)).toStrictEqual({ modifiedArray: [1, 2, 4], removedNumber: 3 });
    });

    test("edge cases", () => {
      expect(removeFromIndex([1, 2, 3, 4], 0)).toStrictEqual({ modifiedArray: [2, 3, 4], removedNumber: 1 });
      expect(removeFromIndex([1, 2, 3, 4], 3)).toStrictEqual({ modifiedArray: [1, 2, 3], removedNumber: 4 });
    });

    test("error cases", () => {
      expect(removeFromIndex([1, 2, 3, 4], 4)).toStrictEqual({ modifiedArray: [1, 2, 3, 4], removedNumber: undefined });
      expect(removeFromIndex([1, 2, 3, 4], -1)).toStrictEqual({ modifiedArray: [1, 2, 3, 4], removedNumber: undefined });
    });
  });

  describe("removePrimeNumbers", () => {
    test("normal cases", () => {
      expect(removePrimeNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 4, 6]);
      expect(removePrimeNumbers([2, 3, 5, 5, 7])).toEqual([]);
    });
  });

  describe("removeEvenNumbers", () => {
    test("normal cases", () => {
      expect(removeEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
      expect(removeEvenNumbers([2, 4, 6])).toEqual([]);
    });
  });

  describe("insertDoubleAfterEven", () => {
    test("normal cases", () => {
      expect(insertDoubleAfterEven([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 4, 3, 4, 8, 5, 6, 12]);
      expect(insertDoubleAfterEven([1, 3, 5])).toEqual([1, 3, 5]);
      expect(insertDoubleAfterEven([2])).toEqual([2, 4]);
    });
  });

  describe("insertSquareRootBeforePerfectSquare", () => {
    test("normal cases", () => {
      expect(insertSquareRootBeforePerfectSquare([2, 3, 4])).toEqual([2, 3, 2, 4]);
      expect(insertSquareRootBeforePerfectSquare([1, 2, 3, 4, 5, 9])).toEqual([1, 1, 2, 3, 2, 4, 5, 3, 9]);
    });
  });
});

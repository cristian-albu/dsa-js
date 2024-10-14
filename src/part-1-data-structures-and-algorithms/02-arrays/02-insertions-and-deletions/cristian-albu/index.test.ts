import { insertAtIndex, popExample, pushExample, removeFromIndex, shiftExample, unshiftExample } from ".";

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
});

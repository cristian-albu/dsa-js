import {
  isPerfectNumber,
  findMaxDistanceFromOrigin,
  calculateMedian,
} from ".";

// Test for checking if a number is a perfect number
describe("round 3", () => {
  describe("isPerfectNumber", () => {
    test("should return true for perfect number 6", () => {
      expect(isPerfectNumber(6)).toBe(true);
    });

    test("should return false for non-perfect number 8", () => {
      expect(isPerfectNumber(8)).toBe(false);
    });

    test("should return false for prime number 7", () => {
      expect(isPerfectNumber(7)).toBe(false);
    });

    test("should return true for perfect number 28", () => {
      expect(isPerfectNumber(28)).toBe(true);
    });

    test("should return true for perfect number 8128", () => {
      expect(isPerfectNumber(8128)).toBe(true);
    });

    test("should return false for number 0", () => {
      expect(isPerfectNumber(0)).toBe(false);
    });
  });

  // Test for finding maximum distance from origin
  describe("findMaxDistanceFromOrigin", () => {
    test("should return 5 for coordinates (3, 4) and (1, 1)", () => {
      expect(findMaxDistanceFromOrigin(3, 4, 1, 1)).toBe(5);
    });

    test("should return 10 for coordinates (6, 8) and (0, 0)", () => {
      expect(findMaxDistanceFromOrigin(6, 8, 0, 0)).toBe(10);
    });

    test("should return 0 for coordinates (0, 0) and (0, 0)", () => {
      expect(findMaxDistanceFromOrigin(0, 0, 0, 0)).toBe(0);
    });

    test("should return 2.236 for coordinates (1, 2) and (-1, -2)", () => {
      expect(findMaxDistanceFromOrigin(1, 2, -1, -2)).toBeCloseTo(2.236, 3);
    });
  });

  // Test for calculating median of two numbers
  describe("calculateMedian", () => {
    test("should return 4 for numbers 4 and 4", () => {
      expect(calculateMedian(4, 4)).toBe(4);
    });

    test("should return 5 for numbers 4 and 6", () => {
      expect(calculateMedian(4, 6)).toBe(5);
    });

    test("should return 0 for numbers 0 and 0", () => {
      expect(calculateMedian(0, 0)).toBe(0);
    });

    test("should return 2.5 for numbers 2 and 3", () => {
      expect(calculateMedian(2, 3)).toBe(2.5);
    });
  });

});

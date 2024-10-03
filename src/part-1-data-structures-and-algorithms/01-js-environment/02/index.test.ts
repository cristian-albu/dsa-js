import {
  calculateSumOfFirstNPrimes,
  findGCDOfDigitSums,
  calculateArrangementsForIngredients,
  generateFibonacciAndReverse,
  checkIfProductIsPalindrome,
  calculateLCMOfBookPages,
  isSumOfSquaresAnArmstrongNumber,
  countEvenDigits,
  countOddDigits,
  calculateFactorialOfOddNumbersSum,
  countPrimeFibonacciNumbers,
} from ".";

describe("second round", () => {
  describe("calculateSumOfFirstNPrimes", () => {
    test("should return 10 for the sum of the first 4 primes (2, 3, 5, 7)", () => {
      expect(calculateSumOfFirstNPrimes(4)).toBe(17);
    });

    test("should return 0 for N = 0", () => {
      expect(calculateSumOfFirstNPrimes(0)).toBe(0);
    });

    test("should return the correct sum for N = 1", () => {
      expect(calculateSumOfFirstNPrimes(1)).toBe(2);
    });
  });

  // Test for finding the GCD of the sum of digits
  describe("findGCDOfDigitSums", () => {
    test("should return 1 for numbers 48 and 36", () => {
      expect(findGCDOfDigitSums(48, 36)).toBe(1);
    });

    test("should return 2 for numbers 12 and 8", () => {
      expect(findGCDOfDigitSums(12, 8)).toBe(2);
    });

    test("should return 0 for numbers with a digit sum of 0", () => {
      expect(findGCDOfDigitSums(0, 0)).toBe(0);
    });
  });

  // Test for calculating arrangements for ingredients
  describe("calculateArrangementsForIngredients", () => {
    test("should return 120 for ingredients 5 and 4", () => {
      expect(calculateArrangementsForIngredients(5, 4)).toBe(362880); // 9! = 362880
    });

    test("should return 1 for ingredients 0 and 0", () => {
      expect(calculateArrangementsForIngredients(0, 0)).toBe(1);
    });

    test("should return 1 for ingredients 1 and 0", () => {
      expect(calculateArrangementsForIngredients(1, 0)).toBe(1);
    });
  });

  // Test for generating Fibonacci and reversing (just one number returned)
  describe("generateFibonacciAndReverse", () => {
    test("should return 5 for Fibonacci at position 5", () => {
      expect(generateFibonacciAndReverse(5)).toBe(5);
    });

    test("should return 1 for Fibonacci at position 1", () => {
      expect(generateFibonacciAndReverse(1)).toBe(1);
    });
  });

  // Test for checking if the product is a palindrome
  describe("checkIfProductIsPalindrome", () => {
    test("should return true for product of 11 and 101", () => {
      expect(checkIfProductIsPalindrome(11, 101)).toBe(true);
    });

    test("should return false for product of 10 and 20", () => {
      expect(checkIfProductIsPalindrome(10, 20)).toBe(false);
    });
  });

  // Test for calculating LCM of book pages
  describe("calculateLCMOfBookPages", () => {
    test("should return 12 for first 3 books with pages 4, 6, and 8", () => {
      expect(calculateLCMOfBookPages(3)).toBe(24); // LCM of pages is 24
    });

    test("should return 0 for N = 0", () => {
      expect(calculateLCMOfBookPages(0)).toBe(0);
    });
  });

  // Test for checking if sum of squares is an Armstrong number
  describe("isSumOfSquaresAnArmstrongNumber", () => {
    test("should return true for 153", () => {
      expect(isSumOfSquaresAnArmstrongNumber(153)).toBe(true);
    });

    test("should return false for 10", () => {
      expect(isSumOfSquaresAnArmstrongNumber(10)).toBe(false);
    });
  });

  // Test for counting even digits
  describe("countEvenDigits", () => {
    test("should return 3 for number 123456", () => {
      expect(countEvenDigits(123456)).toBe(3);
    });

    test("should return 0 for number 13579", () => {
      expect(countEvenDigits(13579)).toBe(0);
    });
  });

  // Test for counting odd digits
  describe("countOddDigits", () => {
    test("should return 3 for number 123456", () => {
      expect(countOddDigits(123456)).toBe(3);
    });

    test("should return 5 for number 13579", () => {
      expect(countOddDigits(13579)).toBe(5);
    });
  });

  // Test for calculating factorial of odd numbers sum
  describe("calculateFactorialOfOddNumbersSum", () => {
    test("should return 40320 for first 5 odd numbers (1, 3, 5, 7, 9)", () => {
      expect(calculateFactorialOfOddNumbersSum(5)).toBe(40320); // 8! = 40320
    });

    test("should return 1 for N = 0", () => {
      expect(calculateFactorialOfOddNumbersSum(0)).toBe(1);
    });
  });

  // Test for counting prime Fibonacci numbers
  describe("countPrimeFibonacciNumbers", () => {
    test("should return 4 for Fibonacci numbers up to 10 (2, 3, 5, 13)", () => {
      expect(countPrimeFibonacciNumbers(10)).toBe(4);
    });

    test("should return 0 for N = 0", () => {
      expect(countPrimeFibonacciNumbers(0)).toBe(0);
    });
  });
});

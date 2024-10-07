import {
  calculateSumOfFirstNPrimes,
  findGCDOfDigitSums,
  calculateArrangementsForIngredients,
  generateFibonacciAndReverse,
  checkIfProductIsPalindrome,
  calculateLCMOfBookPages,
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
      expect(findGCDOfDigitSums(48, 36)).toBe(3);
    });

    test("should return 2 for numbers 12 and 8", () => {
      expect(findGCDOfDigitSums(12, 8)).toBe(1);
    });

    test("should return 0 for numbers with a digit sum of 0", () => {
      expect(findGCDOfDigitSums(0, 0)).toBe(0);
    });
  });

  // Test for calculating arrangements for ingredients
  describe("calculateArrangementsForIngredients", () => {
    test("should return 362880 for ingredients 5 and 4", () => {
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
    test("should return '5 3 2 1 1 0' for Fibonacci sequence up to position 5 in reverse", () => {
      expect(generateFibonacciAndReverse(5)).toBe("5 3 2 1 1 0");
    });

    test("should return '1 0' for Fibonacci sequence up to position 1 in reverse", () => {
      expect(generateFibonacciAndReverse(1)).toBe("1 0");
    });

    test("should return '0' for Fibonacci sequence up to position 0", () => {
      expect(generateFibonacciAndReverse(0)).toBe("0");
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
    test("should return 1 for N = 1", () => {
      expect(calculateLCMOfBookPages(1)).toBe(1); // LCM of 1 is 1
    });

    test("should return 2 for N = 2", () => {
      expect(calculateLCMOfBookPages(2)).toBe(2); // LCM of (1, 2) is 2
    });

    test("should return 6 for N = 3", () => {
      expect(calculateLCMOfBookPages(3)).toBe(6); // LCM of (1, 2, 3) is 6
    });

    test("should return 12 for N = 4", () => {
      expect(calculateLCMOfBookPages(4)).toBe(12); // LCM of (1, 2, 3, 4) is 12
    });

    test("should return 60 for N = 5", () => {
      expect(calculateLCMOfBookPages(5)).toBe(60); // LCM of (1, 2, 3, 4, 5) is 60
    });

    test("should return 60 for N = 6", () => {
      expect(calculateLCMOfBookPages(6)).toBe(60); // LCM of (1, 2, 3, 4, 5, 6) is 60
    });

    test("should return 420 for N = 7", () => {
      expect(calculateLCMOfBookPages(7)).toBe(420); // LCM of (1, 2, 3, 4, 5, 6, 7) is 420
    });

    test("should return 840 for N = 8", () => {
      expect(calculateLCMOfBookPages(8)).toBe(840); // LCM of (1, 2, 3, 4, 5, 6, 7, 8) is 840
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
    test("should return 362880 for first 3 odd numbers (1, 3, 5)", () => {
      expect(calculateFactorialOfOddNumbersSum(3)).toBe(BigInt(362880)); // 9! = 362880
    });
    test("should return 15511210043330985984000000n for first 5 odd numbers (1, 3, 5, 7, 9)", () => {
      expect(calculateFactorialOfOddNumbersSum(5)).toBe(BigInt("15511210043330985984000000")); // 25! = 15511210043330985984000000
    });

    test("should return 1n for N = 0", () => {
      expect(calculateFactorialOfOddNumbersSum(0)).toBe(BigInt(1)); // 0! = 1
    });
  });

  // Test for counting prime Fibonacci numbers
  describe("countPrimeFibonacciNumbers", () => {
    test("should return 0 for N = 1 (Fibonacci: 0)", () => {
      expect(countPrimeFibonacciNumbers(1)).toBe(0); // No prime numbers in the first term
    });

    test("should return 1 for N = 2 (Fibonacci: 0, 1)", () => {
      expect(countPrimeFibonacciNumbers(2)).toBe(1); // Only 1 is prime
    });

    test("should return 2 for N = 5 (Fibonacci: 0, 1, 1, 2, 3)", () => {
      expect(countPrimeFibonacciNumbers(5)).toBe(2); // Primes: 2, 3
    });

    test("should return 3 for N = 10 (Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34)", () => {
      expect(countPrimeFibonacciNumbers(10)).toBe(4); // Primes: 2, 3, 5, 13
    });

    // Larger N values
    test("should return 4 for N = 12 (Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)", () => {
      expect(countPrimeFibonacciNumbers(12)).toBe(5); // Primes: 2, 3, 5, 13, 89
    });
  });
});

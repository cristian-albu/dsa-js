import {
  findMaxOfTwo,
  findMinOfTwo,
  isEvenOrOdd,
  sumOfNNumbers,
  factorial,
  reverseNumber,
  isPrime,
  findGCD,
  findLCM,
  sumOfDigits,
  countDigits,
  isPalindrome,
  isArmstrong,
  fibonacci,
  powerOfNumber,
} from ".";

describe("Elemental Algorithms", () => {
  test("findMaxOfTwo should return the larger of two numbers", () => {
    expect(findMaxOfTwo(5, 10)).toBe(10);
    expect(findMaxOfTwo(-5, -10)).toBe(-5);
  });

  test("findMinOfTwo should return the smaller of two numbers", () => {
    expect(findMinOfTwo(5, 10)).toBe(5);
    expect(findMinOfTwo(-5, -10)).toBe(-10);
  });

  test('isEvenOrOdd should return "even" for even numbers and "odd" for odd numbers', () => {
    expect(isEvenOrOdd(4)).toBe("even");
    expect(isEvenOrOdd(3)).toBe("odd");
  });

  test("sumOfNNumbers should return the sum of natural numbers up to n", () => {
    expect(sumOfNNumbers(5)).toBe(15);
    expect(sumOfNNumbers(0)).toBe(0);
  });

  test("factorial should return the factorial of n", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1); // 0! is 1
  });

  test("reverseNumber should return the reversed number", () => {
    expect(reverseNumber(123)).toBe(321);
    expect(reverseNumber(100)).toBe(1);
  });

  test("isPrime should return true for prime numbers and false otherwise", () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(4)).toBe(false);
  });

  test("findGCD should return the greatest common divisor of two numbers", () => {
    expect(findGCD(54, 24)).toBe(6);
    expect(findGCD(10, 5)).toBe(5);
  });

  test("findLCM should return the least common multiple of two numbers", () => {
    expect(findLCM(4, 5)).toBe(20);
    expect(findLCM(0, 10)).toBe(0);
  });

  test("sumOfDigits should return the sum of the digits of a number", () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(0)).toBe(0);
  });

  test("countDigits should return the number of digits in a number", () => {
    expect(countDigits(12345)).toBe(5);
    expect(countDigits(0)).toBe(1);
  });

  test("isPalindrome should return true for palindrome numbers", () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(123)).toBe(false);
  });

  test("isArmstrong should return true for Armstrong numbers", () => {
    expect(isArmstrong(153)).toBe(true);
    expect(isArmstrong(123)).toBe(false);
  });

  test("fibonacci should return the first n Fibonacci numbers", () => {
    expect(fibonacci(5)).toEqual("12345");
    expect(fibonacci(0)).toEqual("");
  });

  test("powerOfNumber should return x raised to the power of n", () => {
    expect(powerOfNumber(2, 3)).toBe(8);
    expect(powerOfNumber(5, 0)).toBe(1); // any number to the power of 0 is 1
  });
});

// Finding the Maximum of Two Numbers
export function findMaxOfTwo(a: number, b: number): number {
  // Compare two numbers and return the larger one

  return a > b ? a : b;
}

// Finding the Minimum of Two Numbers
export function findMinOfTwo(a: number, b: number): number {
  // Compare two numbers and return the smaller one

  return a < b ? a : b;
}

// Check if a Number is Even or Odd
export function isEvenOrOdd(num: number): string {
  // Check if the number is divisible by 2 and return 'even' or 'odd'

  return num % 2 === 0 ? "even" : "odd";
}

// Sum of N Natural Numbers
export function sumOfNNumbers(n: number): number {
  // Add numbers from 1 to n using a loop

  let sum = 0;

  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}

// Factorial of a Number
export function factorial(n: number): number {
  // Multiply all numbers from 1 to n using a loop

  let num = 1;

  for (let i = 1; i <= n; i++) num *= i;

  return num;
}

// Reverse a Number
export function reverseNumber(num: number): number {
  // Reverse the digits of a number using mathematical operations
  let number = num;
  let result = 0;

  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    result = result * 10 + digit;
  }

  return result;
}

// Check if a Number is Prime
export function isPrime(num: number): boolean {
  // Check divisibility of num from 2 to square root of num using a loop
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// Find the Greatest Common Divisor (GCD)
export function findGCD(a: number, b: number): number {
  // Use the Euclidean algorithm (modulus and loop) to find the GCD

  let first = a;
  let second = b;

  while (second !== 0) {
    let remainder = first % second;
    first = second;
    second = remainder;
  }

  return first;
}

export function findPrimeFactorizationSum(num: number): number {
  let sum = 0;
  let theNum = num;

  while (theNum % 2 === 0) {
    sum += 2;
    theNum /= 2;
  }

  for (let i = 3; i <= Math.sqrt(theNum); i += 2) {
    while (theNum % i === 0) {
      sum += i;
      theNum /= i;
    }
  }

  if (theNum > 2) {
    sum += theNum;
  }

  return sum;
}

// Find the Least Common Multiple (LCM)
export function findLCM(a: number, b: number): number {
  // Use the formula involving GCD or iterative checking for multiples

  return (a * b) / findGCD(a, b);
}

// Sum of Digits of a Number
export function sumOfDigits(num: number): number {
  // Sum the digits of a number using modulus and division
  let n = num;

  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }

  return sum;
}

// Count the Digits in a Number
export function countDigits(num: number): number {
  // Count the number of digits by dividing the number repeatedly until 0
  let number = num;
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count += 1;
  }

  return count === 0 ? 1 : count;
}

// Check if a Number is a Palindrome
export function isPalindrome(num: number): boolean {
  // Reverse the number and compare it with the original
  let number = num;
  let reverse = 0;

  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    reverse = reverse * 10 + digit;
  }

  return reverse === num;
}

// Check if a Number is an Armstrong Number
export function isArmstrong(num: number): boolean {
  // Calculate the sum of cubes of digits and compare it with the original number
  let number = num;
  let numOfDigits = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    numOfDigits++;
  }

  number = num;

  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);

    sum += Math.pow(digit, numOfDigits);
  }

  return num === sum;
}

// Generate Fibonacci Sequence (N terms)
// you will use a string to output it for now cause you can't use arrays yet. Watch out for type conversions
export function fibonacci(n: number): string {
  // Generate Fibonacci numbers iteratively by summing the last two terms

  if (n === 0) return "";
  if (n === 1) return "0";

  let output = "0";

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 1; i < n; i++) {
    output += prev2;

    let curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return output;
}

// Power of a Number (X^N)
export function powerOfNumber(x: number, n: number): number {
  // Calculate the power of a number using repeated multiplication in a loop

  if (n === 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) result *= x;

  return result;
}

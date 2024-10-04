// Finding the Maximum of Two Numbers
export function findMaxOfTwo(a: number, b: number): number {
  // Compare two numbers and return the larger one
    if (a > b) {
      return a;
    } else {
      return b;
    }
  return 0;
}

// Finding the Minimum of Two Numbers
export function findMinOfTwo(a: number, b: number): number {
  // Compare two numbers and return the smaller one
  if (a < b) {
    return a;
  } else {
    return b;
  }
  return 0;
}

// Check if a Number is Even or Odd
export function isEvenOrOdd(num: number): string {
  // Check if the number is divisible by 2 and return 'even' or 'odd'
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
  return "";
}

// Sum of N Natural Numbers
export function sumOfNNumbers(n: number): number {
  // Add numbers from 1 to n using a loop
let number = 1;
let sum = 0;
for (let number = 1; number <= n; number++) {
  sum += number;
} 
  return sum;
}

// Factorial of a Number
export function factorial(n: number): number {
  // Multiply all numbers from 1 to n using a loop
  let sum = 1;
  for (let i = n; i >= 1; --i) {
    sum *= i;
  }
  return sum;
}

// Reverse a Number
export function reverseNumber(num: number): number {
  // Reverse the digits of a number using mathematical operations
    let reversed = 0;
   while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
   }

  return reversed;
}

// Check if a Number is Prime
export function isPrime(num: number): boolean {
  // Check divisibility of num from 2 to square root of num using a loop
    for (let i = 2; i <= Math.sqrt(num); i++ ) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  return false;
}

// Find the Greatest Common Divisor (GCD)
export function findGCD(a: number, b: number): number {
  // Use the Euclidean algorithm (modulus and loop) to find the GCD
  let first = a;
  let second = b;
    while (second !== 0) {
      let temp = second;     
      second = first % second;
      first = temp;
    }
  return first;
}

// Find the Least Common Multiple (LCM)
export function findLCM(a: number, b: number): number {
  // Use the formula involving GCD or iterative checking for multiples

  return 0;
}

// Sum of Digits of a Number
export function sumOfDigits(num: number): number {
  // Sum the digits of a number using modulus and division

  return 0;
}

// Count the Digits in a Number
export function countDigits(num: number): number {
  // Count the number of digits by dividing the number repeatedly until 0

  return 0;
}

// Check if a Number is a Palindrome
export function isPalindrome(num: number): boolean {
  // Reverse the number and compare it with the original

  return false;
}

// Check if a Number is an Armstrong Number
export function isArmstrong(num: number): boolean {
  // Calculate the sum of cubes of digits and compare it with the original number

  return false;
}

// Generate Fibonacci Sequence (N terms)
// you will use a string to output it for now cause you can't use arrays yet. Watch out for type conversions
export function fibonacci(n: number): string {
  // Generate Fibonacci numbers iteratively by summing the last two terms

  return "";
}

// Power of a Number (X^N)
export function powerOfNumber(x: number, n: number): number {
  // Calculate the power of a number using repeated multiplication in a loop

  return 0;
}

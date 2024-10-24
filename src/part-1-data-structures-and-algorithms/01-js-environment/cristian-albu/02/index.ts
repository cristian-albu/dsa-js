// 1. A curious mathematician is exploring the world of prime numbers.
// He wants to find the sum of the first N prime numbers to understand their distribution better.
// Help him calculate this sum for any given N.

function unsafeIsPrime(n: number): boolean {
  let result = true;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return (result = false);
  }

  return result;
}

export function calculateSumOfFirstNPrimes(n: number): number {
  // Implement logic here

  if (n === 0) return 0;
  if (n === 1) return 2;

  let sum = 2;
  let i = 3;
  let count = 1;

  while (count < n) {
    if (unsafeIsPrime(i)) {
      sum += i;
      count++;
    }
    i += 2;
  }

  return sum;
}

// 2. Two friends, Alice and Bob, are playing a game where they compare numbers.
// Each of them has a number, and they want to determine the greatest common divisor
// of the sum of the digits of their respective numbers. Help them figure this out!

function findSumOfDigits(num: number): number {
  let n = num;
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }

  return sum;
}

export function findGCDOfDigitSums(a: number, b: number): number {
  // Implement logic here

  if (a === 0 && b === 0) return 0;

  let sumA = findSumOfDigits(a);
  let sumB = findSumOfDigits(b);

  while (sumB !== 0) {
    const remainder = sumA % sumB;
    sumA = sumB;
    sumB = remainder;
  }

  return sumA;
}

// 3. During a festive season, a baker decides to make a special cake for a party.
// He has two ingredients and wants to know how many ways he can combine them
// based on the sum of their amounts. Can you help him calculate the factorial
// of this sum to determine the possible arrangements?

export function calculateArrangementsForIngredients(a: number, b: number): number {
  // Implement logic here

  let sum = 1;

  for (let i = 1; i <= a + b; i++) {
    sum *= i;
  }

  return sum;
}

// 4. A group of students is studying the Fibonacci sequence for their math project.
// They need to create the sequence up to the Nth term, but they also want to present
// it in reverse order for added creativity. Can you assist them in reversing the sequence?

export function generateFibonacciAndReverse(n: number): string {
  // Implement logic here

  let sequenceString = "0 1 1";

  if (n === 0) return "0";
  if (n === 1) return "1 0";
  if (n === 2) return "1 1 0";

  let prev1 = 1;
  let prev2 = 1;

  for (let i = 2; i < n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
    sequenceString += ` ${current}`;
  }

  let reversedSequence = "";

  for (let i = sequenceString.length - 1; i >= 0; i--) {
    reversedSequence += sequenceString[i];
  }

  return reversedSequence;
}

// 5. In a quirky competition, two contestants are required to multiply their scores
// to determine the overall winner. However, the twist is that they also want to know
// if the product of their scores is a palindrome. Can you help them with that?

export function checkIfProductIsPalindrome(a: number, b: number): boolean {
  // Implement logic here

  let product = a * b;
  let inversedProduct = 0;

  while (product > 0) {
    let digit = product % 10;
    product = Math.floor(product / 10);
    inversedProduct = inversedProduct * 10 + digit;
  }
  return a * b === inversedProduct;
}

// 6. A librarian is tasked with organizing a special collection of books.
// To ensure everything is in order, she wants to find the least common multiple
// of the pages in the first N books in her collection. Help her compute this LCM.

function pairWiseLCM(a: number, b: number) {
  if (a === 0 || b === 0) return 0;
  if (a === 1) return 1;
  if (b === 1) return 1;

  let aNum = a;
  let bNum = b;

  let result = 1;

  for (let i = 2; i * i <= Math.max(aNum, bNum); i++) {
    let aCurrCounter = 0;
    let bCurrCounter = 0;

    if (aNum % i === 0 || bNum % i === 0) {
      if (aNum > 0) {
        while (aNum % i === 0) {
          aCurrCounter += 1;
          aNum = Math.floor(aNum / i);
        }
      }

      if (bNum > 0) {
        while (bNum % i === 0) {
          bCurrCounter += 1;
          bNum = Math.floor(bNum / i);
        }
      }
    }

    const highCurrCounter = Math.max(aCurrCounter, bCurrCounter);

    if (highCurrCounter > 0) {
      result *= Math.pow(i, highCurrCounter);
    }
  }

  if (aNum > 1) {
    result *= aNum;
  }
  if (bNum > 1) {
    result *= bNum;
  }

  return result;
}

export function calculateLCMOfBookPages(n: number): number {
  // Implement logic here

  if (n <= 2) return n;

  let accum = 2;

  for (let i = 3; i <= n; i++) {
    accum = pairWiseLCM(accum, i);
  }

  return accum;
}

// 7. A teacher wants to assess the digit skills of her students.
// She decides to take a number and count how many of its digits are even
// and how many are odd. Can you help her with this task?

function countDigits(num: number, even: boolean) {
  let count = 0;
  let n = num;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    if (even ? digit % 2 === 0 : digit % 2 !== 0) count++;
  }

  return count;
}

export function countEvenDigits(num: number): number {
  // Implement logic here

  return countDigits(num, true);
}

export function countOddDigits(num: number): number {
  // Implement logic here

  return countDigits(num, false);
}

// 8. A math enthusiast is fascinated by odd numbers.
// He wants to find the factorial of the sum of the first N odd numbers
// to explore their unique properties. Can you assist him in calculating this factorial?

export function calculateFactorialOfOddNumbersSum(n: number): BigInt {
  // Implement logic here
  let sum = 0;

  for (let i = 1, count = 1; count <= n; i += 2, count++) sum += i;

  let factorial = BigInt(1);

  for (let i = 1; i <= sum; i++) factorial = BigInt(factorial * BigInt(i));

  return factorial;
}

// 9. An aspiring coder is learning about Fibonacci numbers and their properties.
// He is curious to find out how many numbers in the Fibonacci sequence are also prime.
// Can you help him identify this count up to the Nth term?

export function countPrimeFibonacciNumbers(n: number): number {
  // Implement logic here

  if (n < 2) return 0;
  if (n === 2) return 1;

  let primesCount = 1;

  let prev1 = 1;
  let prev2 = 1;

  for (let i = 3; i < n; i++) {
    let curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;

    if (curr % 2 !== 0) {
      let isPrime = true;

      for (let j = 3; j * j <= curr; j += 2) {
        if (curr % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) primesCount++;
    }
  }

  return primesCount;
}

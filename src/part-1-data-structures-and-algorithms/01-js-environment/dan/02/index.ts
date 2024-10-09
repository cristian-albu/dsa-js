// 1. A curious mathematician is exploring the world of prime numbers.
// He wants to find the sum of the first N prime numbers to understand their distribution better.
// Help him calculate this sum for any given N.

export function calculateSumOfFirstNPrimes(n: number): number {
  let count = 0;
  let sum = 0;
  let candidate = 2;
  while (count < n) {
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(candidate); i++) {      
      if (candidate % i === 0) {
        isPrime = false;
        break;
      }       
    }
    if (isPrime) {
      count++;
      sum += candidate;
    }    
    candidate++;
  }   
  return sum;  
}


// 2. Two friends, Alice and Bob, are playing a game where they compare numbers.
// Each of them has a number, and they want to determine the greatest common divisor
// of the sum of the digits of their respective numbers. Help them figure this out!

export function findGCDOfDigitSums(a: number, b: number): number {
  // Implement logic here
let alice = a;
let bob = b;

function findSum (num: number): number {
  let sum = 0;
  let number = num;
    while (number > 0) {
      let remainder = number % 10;
      number = Math.floor(number / 10);      
      sum += remainder;          
    }
    return sum;
  }

  let aliceSum = findSum(alice);
  let bobSum = findSum(bob);


  function findGCD (a: number, b: number) {
    let first = a;
  let second = b;
    while (second !== 0) {
      let temp = second;     
      second = first % second;
      first = temp;
    }
    return first;
  }
 let result = findGCD(aliceSum, bobSum);


  return result;
}

// 3. During a festive season, a baker decides to make a special cake for a party.
// He has two ingredients and wants to know how many ways he can combine them
// based on the sum of their amounts. Can you help him calculate the factorial
// of this sum to determine the possible arrangements?

export function calculateArrangementsForIngredients(a: number, b: number): number {
  // Implement logic here

let sum = a + b;

function factorial(num: number) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

  return factorial(sum);
}

// 4. A group of students is studying the Fibonacci sequence for their math project.
// They need to create the sequence up to the Nth term, but they also want to present
// it in reverse order for added creativity. Can you assist them in reversing the sequence?

export function generateFibonacciAndReverse(n: number): string {
  // Implement logic here
  function findIt(n: number) {
    let first = 0;
    let second = 1;
    let sum = 0;
    let result = ``;
    for (let i = 0; i <= n; i++) {
    result += `${first}`;
    if (i !== n) {
      result += ' ';
    }
    sum = first + second;
    first = second;
    second = sum;
    }
    let reversed = '';
    for (let i = result.length - 1; i >= 0; i--) {
      reversed += result[i];
    }  
    return reversed;
  }

  return findIt(n);
}

// 5. In a quirky competition, two contestants are required to multiply their scores
// to determine the overall winner. However, the twist is that they also want to know
// if the product of their scores is a palindrome. Can you help them with that?

export function checkIfProductIsPalindrome(a: number, b: number): boolean {
  // Implement logic here
    let first = a;
    let second = b;
    let product = a * b;
    let temp = 0;
    let reversed = 0;
    while (product > 0) {
      temp = product % 10;
      reversed = reversed * 10 + temp;
      product = Math.floor(product / 10);
    }

    if (reversed === (a*b)) {
      return true;
    } else {
      return false;
    }
}




// 7. A teacher wants to assess the digit skills of her students.
// She decides to take a number and count how many of its digits are even
// and how many are odd. Can you help her with this task?

export function countEvenDigits(num: number): number {

  let evenCounter = 0;
  let oddCounter = 0;

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    if (digit % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  

  return evenCounter;
}

export function countOddDigits(num: number): number {
  // Implement logic here
  let evenCounter = 0;
  let oddCounter = 0;

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    if (digit % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  

  return oddCounter;
}

// 8. A math enthusiast is fascinated by odd numbers.
// He wants to find the factorial of the sum of the first N odd numbers
// to explore their unique properties. Can you assist him in calculating this factorial?

export function calculateFactorialOfOddNumbersSum(n: number): BigInt {
  // Implement logic here
  if (n === 0) return BigInt(1);

  let sum = 0;
for (let i = 0; i < n; i++) {
  
  sum += 2 * i + 1;
}

let factorial = BigInt(1);
for (let i = BigInt(sum); i >= BigInt(1); i--) {
  factorial *= i;
}
return factorial;
}

// 9. An aspiring coder is learning about Fibonacci numbers and their properties.
// He is curious to find out how many numbers in the Fibonacci sequence are also prime.
// Can you help him identify this count up to the Nth term?

export function countPrimeFibonacciNumbers(n: number): number {
  // Implement logic here
  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let first = 0;
  let second = 1;
  let counter = 0;

  for (let i = 0; i < n; i++) {
    let current = first;

    if (isPrime(current)) {
      counter++;
    }

    let next = first + second;
    first = second;
    second = next;
  } 

  return counter;
}

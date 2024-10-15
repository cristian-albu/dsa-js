// In a tranquil village of numbers, you are given an array of natural numbers.
// Your task is to check if all elements in the array are even.
// An even number is an integer that is exactly divisible by 2.
// For example, given [2, 4, 6, 8], the output should be true,
// since all numbers are even. However, given [1, 2, 3, 4],
// the output should be false, as 1 and 3 are not even.
export function areAllElementsEven(numbers: number[]): boolean {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// In a bustling market of numbers, you are given an array of natural numbers.
// Your task is to check if any two elements in the array are different.
// If all elements are distinct, return true; otherwise, return false.
// For example, given [1, 2, 3, 4], the output should be true,
// since all elements are different. However, given [1, 2, 2, 3],
// the output should be false, as the number 2 appears more than once.
export function areAllElementsDistinct(numbers: number[]): boolean {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    for (let j = temp; j < numbers.length; j++) {
      if (temp === numbers[j]) {
        return false;
      }
    }
  }
  return true;
}

// In a serene land of numbers, you are given an array of natural numbers.
// Your task is to check if the array is sorted in ascending order.
// Return true if all elements are in non-decreasing order, otherwise return false.
// For example, given [1, 2, 3, 4], the output should be true,
// since the elements are in ascending order. However, given [1, 3, 2, 4],
// the output should be false, as the sequence is not ordered correctly.
export function isSortedAscending(numbers: number[]): boolean {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      return false;
    }
  }
  return true;
}

// In a mystical kingdom of numbers, you are given an array of integers.
// Your task is to check if all the even numbers in the array are sorted in ascending order.
// Return true if the even numbers are in non-decreasing order, otherwise return false.
// For example, given [1, 2, 4, 3, 6], the output should be true,
// since the even numbers (2, 4, 6) are sorted in ascending order.
// However, given [1, 4, 2, 6], the output should be false,
// since the even numbers (4, 2, 6) are not in order.
export function areEvenNumbersSorted(numbers: number[]): boolean {
  // Your code here
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] >= evenNumbers[i + 1]) {
      return false;
    }
  }

  return true;
}

// In a bustling town of numbers, you are given an array of natural numbers.
// Your task is to check if all the numbers in the array have an even number of digits.
// Return true if every number has an even number of digits, otherwise return false.
// For example, given [12, 345, 6789], the output should be false,
// because 345 has an odd number of digits (3).
// However, given [12, 34, 6789], the output should be true,
// since all numbers have an even number of digits.
export function allElementsHaveEvenNumberOfDigits(numbers: number[]): boolean {
  // Your code here
  let tempItem = 0;
  for (let i = 0; i < numbers.length; i++) {
    let digitCounter = 0;
    tempItem = numbers[i];
    while (tempItem > 0) {
      tempItem = Math.floor(tempItem / 10);
      digitCounter++;
    }
    if (digitCounter % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// In a distant valley of numbers, you are given an array of natural numbers.
// Your task is to check if all elements in the array are multiples of the last element.
// Return true if every number in the array is a multiple of the last element, otherwise return false.
// For example, given [6, 12, 18, 3], the output should be true,
// because all the numbers are multiples of 3 (the last element).
// However, given [6, 12, 18, 4], the output should be false,
// because not all numbers are multiples of 4 (the last element).
export function areAllElementsMultiplesOfLast(numbers: number[]): boolean {
  // Your code here
  let last = numbers.length - 1;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] % numbers[last] !== 0) {
      return false;
    }
  }

  return true;
}

// In a land of binary numbers, a vector is called "alternating" if, for any two consecutive elements,
// at least one of them is 0. You are given an array of natural numbers consisting of 0s and 1s.
// Your task is to check if the array is alternating. Return true if it is alternating, otherwise return false.
// For example, given [0, 1, 0, 1], the output should be true because for any two consecutive elements,
// at least one is 0. However, given [1, 1, 0, 1], the output should be false, because the first two elements are both 1.
export function isAlternatingArray(numbers: number[]): boolean {
  // Your code here
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return false;
    }
  }
  return true;
}

// In a world of mirrored numbers, you are given two arrays of natural numbers, each with n elements.
// Your task is to check if the two arrays contain exactly the same elements,
// regardless of their order.
// Return true if the arrays contain the same elements, otherwise return false.
// For example, given [1, 2, 3] and [3, 2, 1], the output should be true,
// since both arrays contain the same elements. However, given [1, 2, 3] and [1, 2, 4],
// the output should be false, as the second array contains a different element (4 instead of 3).
export function areArraysEqual(
  numbers1: number[],
  numbers2: number[]
): boolean {
  // Your code here

  if (numbers1.length !== numbers2.length) {
    return false;
  }
  for (let i = 0; i < numbers1.length; i++) {
    numbers1.forEach((a) => {
      let counterA = 0;
      let counterB = 0;
      numbers1.forEach((element) => {
        if (element === a) {
          counterA++;
        }
      });
      numbers2.forEach((element) => {
        if (element === a) {
          counterB++;
        }
      });
      if (counterA !== counterB) {
        return false;
      }
    });
  }
  return true;
}

// In a mysterious valley of numbers, you are given an array of natural numbers with n elements.
// Your task is to check if all elements of the array belong to the closed interval
// determined by the first and last element of the array (inclusive).
// Return true if all the numbers are within this interval, otherwise return false.
// For example, given [3, 4, 2, 5], the output should be true,
// since all elements are within the interval [3, 5].
// However, given [3, 6, 2, 5], the output should be false, as 6 is outside the interval [3, 5].
export function areElementsInInterval(numbers: number[]): boolean {
  // Your code here
  const first = numbers[0];
  const last = numbers[numbers.length - 1];
  for (let i = 1; i < numbers.length - 1; i++) {
    if (
      numbers[i] <= Math.min(first, last) ||
      numbers[i] >= Math.max(first, last)
    ) {
      return false;
    }
  }
  return true;
}

// In a land of unique digits, you are given an array of natural numbers with n elements.
// Your task is to check if all the digits of each number in the array are distinct.
// Return true if each number has all distinct digits, otherwise return false.
// For example, given [123, 456, 789], the output should be true,
// since all the digits in each number are unique.
// However, given [112, 345, 678], the output should be false,
// as 112 has repeated digits (1 appears twice).
export function allNumbersHaveDistinctDigits(numbers: number[]): boolean {
  // Your code here
  for (let k = 0; k < numbers.length; k++) {
    let array = [];
    while (numbers[k] > 0) {
      array.push(numbers[k] % 10);
      numbers[k] = Math.floor(numbers[k] / 10);
    }
    for (let i = 0; i < array.length; i++) {
      let a = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (a === array[j]) {
          return false;
        }
      }
    }
  }
  return true;
}

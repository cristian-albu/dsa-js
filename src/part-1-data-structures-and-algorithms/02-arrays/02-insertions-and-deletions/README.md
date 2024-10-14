```ts
// In a land of numbers, you are given an array and a new number.
// Your task is to add the number to the end of the array using the push method.
// For example, given [1, 2, 3] and the number 4,
// the output should be [1, 2, 3, 4].
export function pushExample(numbers: number[], newNumber: number): number[] {
  // Your code here
}

// In a mystical realm of numbers, you are given an array.
// Your task is to remove the last number from the array using the pop method
// and return the modified array.
// For example, given [1, 2, 3, 4], the output should be [1, 2, 3],
// and the removed number should be 4.
export function popExample(numbers: number[]): { modifiedArray: number[]; removedNumber: number } {
  // Your code here
}

// In a busy market of numbers, you are given an array.
// Your task is to remove the first number from the array using the shift method
// and return the modified array.
// For example, given [1, 2, 3, 4], the output should be [2, 3, 4],
// and the removed number should be 1.
export function shiftExample(numbers: number[]): { modifiedArray: number[]; removedNumber: number } {
  // Your code here
}

// In a thriving village of numbers, you are given an array and a new number.
// Your task is to add the number to the beginning of the array using the unshift method.
// For example, given [2, 3, 4] and the number 1,
// the output should be [1, 2, 3, 4].
export function unshiftExample(numbers: number[], newNumber: number): number[] {
  // Your code here
}

// In a magical realm of numbers, you are given an array, a number, and an index.
// Your task is to insert the number at the specified index in the array.
// For example, given [1, 2, 4] and the number 3 at index 2,
// the output should be [1, 2, 3, 4].
export function insertAtIndex(numbers: number[], newNumber: number, index: number): number[] {
  // Your code here
}

// In a bustling village of numbers, you are given an array and an index.
// Your task is to remove the number at the specified index from the array
// and return the modified array.
// For example, given [1, 2, 3, 4] and the index 2,
// the output should be [1, 2, 4], and the removed number should be 3.
export function removeFromIndex(numbers: number[], index: number): { modifiedArray: number[]; removedNumber: number } {
  // Your code here
}

// In a mystical forest of numbers, you are given an array of integers.
// Your task is to remove all elements from the array that are prime numbers.
// A prime number is a natural number greater than 1 that cannot be formed by multiplying
// two smaller natural numbers.
// For example, given [1, 2, 3, 4, 5, 6], the output should be [1, 4, 6],
// since 2, 3, and 5 are prime numbers.
export function removePrimeNumbers(numbers: number[]): number[] {
  // Your code here
}

// In a vibrant garden of numbers, you are given an array of integers.
// Your task is to remove all elements from the array that are even numbers.
// An even number is an integer that is exactly divisible by 2.
// For example, given [1, 2, 3, 4, 5, 6], the output should be [1, 3, 5],
// since 2, 4, and 6 are even numbers.
export function removeEvenNumbers(numbers: number[]): number[] {
  // Your code here
}

// In a magical land of numbers, you are given an array of integers.
// Your task is to insert the double of each even number immediately after the even number itself in the array.
// For example, given [1, 2, 3, 4, 5], the output should be [1, 2, 4, 3, 4, 8, 5],
// since 2 is even and its double (4) is inserted right after it,
// and similarly for 4 (its double is 8).
export function insertDoubleAfterEven(numbers: number[]): number[] {
  // Your code here
}

// In a wondrous realm of numbers, you are given an array of integers.
// Your task is to insert the square root of each perfect square number immediately
// before the perfect square itself in the array.
// A perfect square is an integer that is the square of an integer.
// For example, given [1, 2, 3, 4, 5, 9], the output should be
// [1, 1, 2, 3, 2, 4, 3, 5, 3], since the perfect squares are 1 (sqrt(1) = 1),
// 4 (sqrt(4) = 2), and 9 (sqrt(9) = 3).
export function insertSquareRootBeforePerfectSquare(numbers: number[]): number[] {
  // Your code here
}
```

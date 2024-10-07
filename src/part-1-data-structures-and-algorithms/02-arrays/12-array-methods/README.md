```ts
// In a magical land of numbers, you are given an array of integers.
// Your task is to apply a provided function to each element in the array.
// For example, given [1, 2, 3] and a function that prints each number,
// the output should be:
// 1
// 2
// 3
export function forEachExample(numbers: number[], action: (num: number) => void): void {
  // Your code here
}

// In a village of numbers, you need to create a new array by applying a given function
// to each element in the original array.
// For example, given [1, 2, 3] and a function that doubles each number,
// the output should be [2, 4, 6].
export function mapExample(numbers: number[], transform: (num: number) => number): number[] {
  // Your code here
}

// In a lush garden of numbers, you are tasked with filtering the array to keep only
// the numbers that satisfy a given condition.
// For example, given [1, 2, 3, 4] and a condition to keep even numbers,
// the output should be [2, 4].
export function filterExample(numbers: number[], condition: (num: number) => boolean): number[] {
  // Your code here
}

// In the library of numbers, you are given an array of integers and a target number.
// Your task is to find the index of the first occurrence of the target number in the array.
// For example, given [1, 2, 3, 2] and the target 2, the output should be 1,
// since 2 first appears at index 1.
export function indexOfExample(numbers: number[], target: number): number {
  // Your code here
}

// In a magical forest of numbers, you need to check if at least one element in the
// array satisfies a given condition.
// For example, given [1, 2, 3] and a condition to check for even numbers,
// the output should be true, as there is at least one even number (2).
export function someExample(numbers: number[], condition: (num: number) => boolean): boolean {
  // Your code here
}

// In a realm of numbers, you are tasked with creating a new array by extracting a portion
// of the original array.
// For example, given [1, 2, 3, 4, 5], if you slice from index 1 to 4,
// the output should be [2, 3, 4].
export function sliceExample(numbers: number[], start: number, end: number): number[] {
  // Your code here
}

// In the kingdom of numbers, you are given an array and need to modify it by removing
// or adding elements at a specific index.
// For example, given [1, 2, 3, 4] and a request to remove 2 elements starting at index 1,
// the output should be [1, 4], and the removed elements are [2, 3].
export function spliceExample(numbers: number[], index: number, count: number): number[] {
  // Your code here
}

// In a land of numbers, you need to accumulate values from an array into a single value
// using a provided function.
// For example, given [1, 2, 3, 4] and a function that sums the elements,
// the output should be 10, as 1 + 2 + 3 + 4 = 10.
export function reduceExample(
  numbers: number[],
  accumulator: (total: number, num: number) => number,
  initialValue: number
): number {
  // Your code here
}

// In a bustling market of numbers, you need to sort an array of integers in ascending
// order.
// For example, given [4, 2, 3, 1], the output should be [1, 2, 3, 4].
export function sortExample(numbers: number[]): number[] {
  // Your code here
}

// In a kingdom of arrays, you need to combine two arrays into one.
// For example, given [1, 2] and [3, 4], the output should be [1, 2, 3, 4].
export function concatExample(array1: number[], array2: number[]): number[] {
  // Your code here
}
```

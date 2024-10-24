# Parsing

```ts
// Once upon a time in a land of numbers, you received a list of strings that represent numbers.
// Your task is to convert these strings into an array of numbers.
// For example, given ["1", "2", "3"], your output should be [1, 2, 3].
export function parseNumbers(stringArray: string[]): number[] {
  // Your code here
}

// The temperature is measured in Celsius, but you need to convert it to Fahrenheit.
// You are given an array of temperature strings in Celsius. Your task is to convert them to Fahrenheit.
// For example, given ["0", "100"], your output should be ["32", "212"].
export function convertTemperaturesToFahrenheit(celsiusArray: string[]): string[] {
  // Your code here
}

// You have been given a treasure map in the form of CSV (Comma-Separated Values) strings.
// Your task is to parse the CSV strings into arrays of strings.
// For example, given ["name,age", "Alice,30", "Bob,25"], your output should be
// [["name", "age"], ["Alice", "30"], ["Bob", "25"]].
export function parseCsvData(csvArray: string[]): string[][] {
  // Your code here
}

// In a library of scrolls, each scroll contains a story.
// Your task is to count how many words are in each story string.
// Given ["Once upon a time", "In a galaxy far, far away"],
// the output should be [4, 6].
export function countWordsInStories(stories: string[]): number[] {
  // Your code here
}

// In a mystical land of numbers, you are given an array containing natural numbers.
// Your task is to determine the absolute difference between the count of even values
// and the count of odd values in the array.
// For example, given [1, 2, 3, 4], the absolute difference should be 0,
// since there are two even numbers (2, 4) and two odd numbers (1, 3).
export function absoluteDifferenceEvenOddCount(numbers: number[]): number {
  // Your code here
}

// In a land of natural numbers, you are given an array containing n natural numbers.
// Your task is to find the last prime number in the array and replace it with 0.
// After that, display the modified array.
// For example, given [4, 6, 5, 8, 11], the output should be
// [4, 6, 5, 8, 0], since 11 is the last prime number.
export function replaceLastPrimeWithZero(numbers: number[]): number[] {
  // Your code here
}

// In a mystical realm of natural numbers, you are given an array containing n natural numbers.
// Your task is to find and display all the elements in the array that are multiples of the last element.
// For example, given [3, 6, 9, 12, 4], the output should be [12],
// since 12 is the only element that is a multiple of the last element, 4.
export function displayMultiplesOfLastElement(numbers: number[]): number[] {
  // Your code here
}

// In a vast landscape of numbers, you are given an array containing n elements.
// Your task is to determine both the maximum and minimum values among the elements in the array.
// For example, given [3, 7, 2, 9, 4], the maximum should be 9 and the minimum should be 2.
export function findMaxAndMin(numbers: number[]): { max: number; min: number } {
  // Your code here
}

// In the kingdom of numbers, you are given an array containing n natural numbers.
// Your task is to determine how many elements in the array are equal to the difference
// between the maximum and minimum values of the array.
// For example, given [3, 7, 2, 9, 4], the difference is 9 - 2 = 7,
// and there is one element (7) that equals this difference.
export function countElementsEqualToDifference(numbers: number[]): number {
  // Your code here
}

// In the enchanted mountains of numbers, an array is considered a "mountain"
// if it first increases to a peak and then decreases.
// Your task is to determine if a given array follows this pattern.
// For example, [1, 2, 3, 2, 1] is a mountain number (increases to 3, then decreases),
// while [1, 2, 3, 4, 5] is not, as it only increases.
export function isMountainNumber(numbers: number[]): boolean {
  // Your code here
}
}
```

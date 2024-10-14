// Once upon a time in a land of numbers, you received a list of strings that represent numbers.
// Your task is to convert these strings into an array of numbers.
// For example, given ["1", "2", "3"], your output should be [1, 2, 3].
export function parseNumbers(stringArray: string[]): number[] {
  const newArr: number[] = [];

  for (let i = 0; i < stringArray.length; i++) {
    const curr = Number(stringArray[i]);
    if (typeof curr === "number" && !Number.isNaN(curr)) {
      newArr.push(curr);
    }
  }

  return newArr;
}

// The temperature is measured in Celsius, but you need to convert it to Fahrenheit.
// You are given an array of temperature strings in Celsius. Your task is to convert them to Fahrenheit.
// For example, given ["0", "100"], your output should be ["32", "212"].
export function convertTemperaturesToFahrenheit(celsiusArray: string[]): string[] {
  const newArr: string[] = [];

  for (let i = 0; i < celsiusArray.length; i++) {
    const curr = Number(celsiusArray[i]);
    if (typeof curr === "number" && !Number.isNaN(curr)) {
      newArr.push(((curr * 9) / 5 + 32).toString());
    }
  }

  return newArr;
}

// You have been given a treasure map in the form of CSV (Comma-Separated Values) strings.
// Your task is to parse the CSV strings into arrays of strings.
// For example, given ["name,age", "Alice,30", "Bob,25"], your output should be
// [["name", "age"], ["Alice", "30"], ["Bob", "25"]].
export function parseCsvData(csvArray: string[]): string[][] {
  const output = [];

  for (let i = 0; i < csvArray.length; i++) {
    const curr = csvArray[i];
    const newVal: string[] = [];
    let commaCounter = 0;

    if (typeof curr !== "string") continue;

    for (let j = 0; j < curr.length; j++) {
      if (curr[j] === ",") {
        commaCounter++;
      } else {
        const valToPush = typeof newVal[commaCounter] === "string" ? newVal[commaCounter] + curr[j] : curr[j];
        newVal[commaCounter] = valToPush;
      }
    }

    output.push(newVal);
  }

  return output;
}

// In a library of scrolls, each scroll contains a story.
// Your task is to count how many words are in each story string.
// Given ["Once upon a time", "In a galaxy far, far away"],
// the output should be [4, 6].
export function countWordsInStories(stories: string[]): number[] {
  const output: number[] = [];

  for (let i = 0; i < stories.length; i++) {
    const current = stories[i];

    if (current.length === 0) {
      output.push(0);
      continue;
    }

    let count = 1;

    for (let j = 0; j < current.length; j++) {
      if (current[j] === " ") {
        count++;
      }
    }

    output.push(count);
  }

  return output;
}

// In a mystical land of numbers, you are given an array containing natural numbers.
// Your task is to determine the absolute difference between the count of even values
// and the count of odd values in the array.
// For example, given [1, 2, 3, 4], the absolute difference should be 0,
// since there are two even numbers (2, 4) and two odd numbers (1, 3).
export function absoluteDifferenceEvenOddCount(numbers: number[]): number {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < numbers.length; i++) numbers[i] % 2 === 0 ? even++ : odd++;

  return Math.abs(odd - even);
}

// In a land of natural numbers, you are given an array containing n natural numbers.
// Your task is to find the last prime number in the array and replace it with 0.
// After that, display the modified array.
// For example, given [4, 6, 5, 8, 11], the output should be
// [4, 6, 5, 8, 0], since 11 is the last prime number.
export function replaceLastPrimeWithZero(numbers: number[]): number[] {
  const output: number[] = [];

  function isPrime(n: number) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;

    return true;
  }

  let primeFound = false;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (!primeFound && (numbers[i] === 2 || (numbers[i] % 2 !== 0 && isPrime(numbers[i])))) {
      primeFound = true;
      output.unshift(0);
    } else {
      output.unshift(numbers[i]);
    }
  }

  return output;
}

// In a mystical realm of natural numbers, you are given an array containing n natural numbers.
// Your task is to find and display all the elements in the array that are multiples of the last element.
// For example, given [3, 6, 9, 12, 4], the output should be [12],
// since 12 is the only element that is a multiple of the last element, 4.
export function displayMultiplesOfLastElement(numbers: number[]): number[] {
  const output: number[] = [];
  const lastEl = numbers[numbers.length - 1];

  for (let i = 0; i < numbers.length - 1; i++) {
    const curr = numbers[i];

    if (curr % lastEl === 0) {
      output.push(curr);
    }
  }

  return output;
}

// In a vast landscape of numbers, you are given an array containing n elements.
// Your task is to determine both the maximum and minimum values among the elements in the array.
// For example, given [3, 7, 2, 9, 4], the maximum should be 9 and the minimum should be 2.
export function findMaxAndMin(numbers: number[]): { max: number; min: number } {
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }

  return {
    max,
    min,
  };
}

// In the kingdom of numbers, you are given an array containing n natural numbers.
// Your task is to determine how many elements in the array are equal to the difference
// between the maximum and minimum values of the array.
// For example, given [3, 7, 2, 9, 4], the difference is 9 - 2 = 7,
// and there is one element (7) that equals this difference.
export function countElementsEqualToDifference(numbers: number[]): number {
  const { min, max } = findMaxAndMin(numbers);
  const diff = max - min;

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === diff) {
      count++;
    }
  }
  return count;
}

// In the enchanted mountains of numbers, an array is considered a "mountain"
// if it first increases to a peak and then decreases.
// Your task is to determine if a given array follows this pattern.
// For example, [1, 2, 3, 2, 1] is a mountain number (increases to 3, then decreases),
// while [1, 2, 3, 4, 5] is not, as it only increases.
export function isMountainNumber(numbers: number[]): boolean {
  const n = numbers.length;
  if (n < 3) return false;

  let i = 0;

  while (i + 1 < n && numbers[i] < numbers[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) {
    return false;
  }

  while (i + 1 < n && numbers[i] > numbers[i + 1]) {
    i++;
  }

  return i === n - 1;
}

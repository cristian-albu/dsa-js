// In a land of numbers, you are given an array and a new number.
// Your task is to add the number to the end of the array using the push method.
// For example, given [1, 2, 3] and the number 4,
// the output should be [1, 2, 3, 4].
export function pushExample(numbers: number[], newNumber: number): number[] {
  numbers[numbers.length] = newNumber;

  return numbers;
}

// In a mystical realm of numbers, you are given an array.
// Your task is to remove the last number from the array using the pop method
// and return the modified array.
// For example, given [1, 2, 3, 4], the output should be [1, 2, 3],
// and the removed number should be 4.
export function popExample(numbers: number[]): { modifiedArray: number[]; removedNumber: number } {
  const removedNumber = numbers[numbers.length - 1];
  numbers.length = numbers.length - 1;

  return { modifiedArray: numbers, removedNumber: removedNumber };
}

// In a busy market of numbers, you are given an array.
// Your task is to remove the first number from the array using the shift method
// and return the modified array.
// For example, given [1, 2, 3, 4], the output should be [2, 3, 4],
// and the removed number should be 1.
export function shiftExample(numbers: number[]): { modifiedArray: number[]; removedNumber: number } {
  const removedNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) numbers[i] = numbers[i + 1];

  numbers.length = numbers.length - 1;

  return { modifiedArray: numbers, removedNumber: removedNumber };
}

// In a thriving village of numbers, you are given an array and a new number.
// Your task is to add the number to the beginning of the array using the unshift method.
// For example, given [2, 3, 4] and the number 1,
// the output should be [1, 2, 3, 4].
export function unshiftExample(numbers: number[], newNumber: number): number[] {
  for (let i = numbers.length; i > 0; i--) numbers[i] = numbers[i - 1];

  numbers[0] = newNumber;

  return numbers;
}

// In a magical realm of numbers, you are given an array, a number, and an index.
// Your task is to insert the number at the specified index in the array.
// For example, given [1, 2, 4] and the number 3 at index 2,
// the output should be [1, 2, 3, 4].
export function insertAtIndex(numbers: number[], newNumber: number, index: number): number[] {
  if (index < 0) {
    console.warn(`index should be equal or greater than 0. Operation was not completed`);
    return numbers;
  }

  for (let i = numbers.length; i > index; i--) numbers[i] = numbers[i - 1];

  numbers[index] = newNumber;

  return numbers;
}

// In a bustling village of numbers, you are given an array and an index.
// Your task is to remove the number at the specified index from the array
// and return the modified array.
// For example, given [1, 2, 3, 4] and the index 2,
// the output should be [1, 2, 4], and the removed number should be 3.
export function removeFromIndex(
  numbers: number[],
  index: number
): { modifiedArray: number[]; removedNumber: number | undefined } {
  if (index > numbers.length - 1 || index < 0) {
    console.warn(`index should be between 0 and ${numbers.length - 1}. Operation was not completed`);
    return { modifiedArray: numbers, removedNumber: undefined };
  }

  const removedNumber = numbers[index];

  for (let i = index; i < numbers.length; i++) numbers[i] = numbers[i + 1];

  numbers.length = numbers.length - 1;

  return { modifiedArray: numbers, removedNumber: removedNumber };
}

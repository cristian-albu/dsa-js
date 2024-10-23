// In the kingdom of bubbles, you are tasked with sorting an array of natural numbers using Bubble Sort.
// Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order.
// The pass through the array is repeated until the array is sorted.
// For example, given [4, 2, 7, 1], the output should be [1, 2, 4, 7].
export function bubbleSort(numbers: number[]): number[] {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

// In the land of cards, you are given an array of natural numbers.
// Your task is to sort this array using Insertion Sort, a method that works similarly
// to how you might sort playing cards in your hand.
// The algorithm builds the sorted array one item at a time, inserting elements
// into their correct position by shifting larger elements to the right.
// For example, given [4, 2, 7, 1], the output should be [1, 2, 4, 7].
export function insertionSort(numbers: number[]): number[] {
  // Your code here
  for (let i = 1; i < numbers.length; i++) {
    let currValue = numbers[i];
    let j;
    for (j = i - 1; j >= 0 && numbers[j] > currValue; j--) {
      numbers[j + 1] = numbers[j];
    }
    numbers[j + 1] = currValue;
  }
  return numbers;
}

// In a chaotic world of randomness, you are given an array of natural numbers.
// Your task is to sort this array using Bogo Sort, an extremely inefficient sorting algorithm.
// Bogo Sort works by repeatedly shuffling the array randomly and checking if it is sorted.
// If the array is not sorted, the process continues until it is eventually sorted.
// For example, given [4, 2, 7, 1], after random shuffles, the output will eventually be [1, 2, 4, 7].
// WARNING: This algorithm is purely for fun and is not suitable for real-world use due to its inefficiency.
export function bogoSort(numbers: number[]): number[] {
  // Your code here
  const isSorted = (numbers: number[]) => {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i - 1] > numbers[i]) {
        return false;
      }
    }
    return true;
  };

  const shuffle = (numbers: number[]) => {
    let count = numbers.length,
      temp,
      index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = numbers[count];
      numbers[count] = numbers[index];
      numbers[index] = temp;
    }
    return numbers;
  };

  const sort = (numbers: number[]) => {
    let sorted = false;
    while (!sorted) {
      numbers = shuffle(numbers);
      sorted = isSorted(numbers);
    }
    return numbers;
  };
  return sort(numbers);
}

// In a hall of careful selections, you are given an array of natural numbers.
// Your task is to sort this array using Selection Sort.
// The algorithm repeatedly selects the smallest element from the unsorted portion
// of the array and swaps it with the first unsorted element, thus growing the sorted portion.
// For example, given [4, 2, 7, 1], the output should be [1, 2, 4, 7].
export function selectionSort(numbers: number[]): number[] {
  // Your code here
  let n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  return numbers;
}

// In a realm of merging, you are given an array of natural numbers.
// Your task is to sort this array using Merge Sort, a divide-and-conquer algorithm.
// Merge Sort works by dividing the array into two halves, recursively sorting them,
// and then merging the sorted halves into a single sorted array.
// For example, given [4, 2, 7, 1], the output should be [1, 2, 4, 7].
export function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft: number[] = mergeSort(left);
  const sortedRight: number[] = mergeSort(right);
  return mergeArrays(sortedLeft, sortedRight);
}

export function mergeArrays(a: number[], b: number[]) {
  let c: number[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else if (b[j] < a[i]) {
      c.push(b[j]);
      j++;
    } else if (a[i] === b[j]) {
      c.push(a[i]);
      c.push(b[j]);
      i++;
      j++;
    }
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  return c;
}

// In the realm of quickness, you are given an array of natural numbers.
// Your task is to sort this array using Quick Sort, a highly efficient divide-and-conquer algorithm.
// Quick Sort works by selecting a 'pivot' element, partitioning the array into elements
// less than and greater than the pivot, and then recursively sorting the partitions.
// For example, given [4, 2, 7, 1], the output should be [1, 2, 4, 7].
export function quickSort(numbers: number[]): number[] {
  // Your code here
  function quickSortt(arr: number[], low: number, high: number) {
    if (low < high) {
      let pivotIndex = partition(arr, low, high);

      quickSortt(arr, low, pivotIndex - 1);
      quickSortt(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr: number[], low: number, high: number) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  quickSortt(numbers, 0, numbers.length - 1);
  return numbers;
}

// In a treasure trove of numbers, you are given an array of natural numbers with n elements.
// Your task is to find and display the values in the array that are divisible by 10,
// sorted in descending order. If there are no such values, return an empty array.
// For example, given [30, 15, 20, 5, 40], the output should be [40, 30, 20].
export function displayDescendingDivisibleByTen(numbers: number[]): number[] {
  // Your code here
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 10 === 0) {
      result.push(numbers[i]);
    }

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length - i - 1; j++) {
        if (result[j] < result[j + 1]) {
          let temp: number = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
  }
  return result;
}

// In a mystical forest of distinct natural numbers, you are given an array with n elements.
// Your task is to sort the elements of the array in a special way:
// all the elements before the maximum value should be sorted in ascending order,
// and all the elements after the maximum value should be sorted in descending order.
// The maximum value itself should remain in its original position.
// For example, given [3, 5, 2, 8, 1, 4], the output should be [2, 3, 5, 8, 4, 1].
// Note that 8 is the maximum value and remains in its position.
export function sortAroundMaximum(numbers: number[]): number[] {
  // Your code here
  let maxValue = 0;
  let maxIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
      maxIndex = i;
    }

    for (let j = 0; j < maxIndex; j++) {
      for (let k = 0; k < maxIndex - j - 1; k++) {
        if (numbers[k] > numbers[k + 1]) {
          let temp: number = numbers[k];
          numbers[k] = numbers[k + 1];
          numbers[k + 1] = temp;
        }
      }
    }
  }

  for (let j = maxIndex; j < numbers.length; j++) {
    for (let k = maxIndex; k < numbers.length - 1; k++) {
      if (numbers[k] < numbers[k + 1]) {
        let temp: number = numbers[k];
        numbers[k] = numbers[k + 1];
        numbers[k + 1] = temp;
      }
    }
  }

  return numbers;
}

// In a land of numbers, you are given an array of natural numbers.
// Your task is to calculate the median of the array.
// The median is the middle value when the numbers are sorted in ascending order.
// If the array has an even number of elements, the median is the average of the two middle values.
// For example, given [3, 1, 2, 5], the output should be 2.5 (the average of 2 and 3).
export function calculateMedian(numbers: number[]): number {
  // Your code here
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
}

// In a valley of numbers, you are given an array of natural numbers.
// Your task is to sort the elements of the array that lie between the maximum value and the minimum value in ascending order.
// The maximum and minimum values themselves should remain in their original positions.
// For example, given [3, 5, 2, 8, 1, 4], the output should be [3, 1, 2, 4, 5, 8].
// Note that 8 is the maximum and 1 is the minimum, and the elements between them (2, 4) are sorted.
export function sortBetweenMaxAndMin(numbers: number[]): number[] {
  // Your code here
  return [];
}

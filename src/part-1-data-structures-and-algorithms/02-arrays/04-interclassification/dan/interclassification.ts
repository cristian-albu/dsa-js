// In a harmonious land of numbers, you are given two arrays, a and b, containing natural numbers.
// Both arrays are sorted in ascending order.
// Your task is to construct a third array, c, that merges the elements from arrays a and b
// while maintaining the ascending order of the elements.
// For example, given a = [1, 3, 5] and b = [2, 4, 6], the output should be c = [1, 2, 3, 4, 5, 6].
export function mergeSortedArrays(a: number[], b: number[]): number[] {
  // Your code here
  let newArray = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    newArray.push(a[i]);
    newArray.push(b[i]);
  }
  return newArray;
}

// In a realm of distinct numbers, you are given two arrays, a and b, containing natural numbers.
// Both arrays are sorted in strictly increasing order.
// Your task is to display the unique values that exist in at least one of the two arrays
// while maintaining strict ascending order.
// For example, given a = [1, 2, 3] and b = [2, 4, 5], the output should be [1, 2, 3, 4, 5].
export function displayUniqueValues(a: number[], b: number[]): number[] {
  // Your code here
  let newArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      newArray.push(a[i]);
      i++;
    } else if (b[j] < a[i]) {
      newArray.push(b[j]);
      j++;
    } else {
      newArray.push(a[i]);
      i++;
      j++;
    }
  }

  while (i < a.length) {
    newArray.push(a[i]);
    i++;
  }

  while (j < b.length) {
    newArray.push(b[j]);
    j++;
  }
  return newArray;
}

// In a land of unique numbers, you are given two arrays, a and b, containing natural numbers.
// Both arrays are sorted in strictly increasing order.
// Your task is to display the values that exist in both arrays,
// while maintaining strict ascending order in the output.
// For example, given a = [1, 2, 3, 4] and b = [2, 3, 5, 6], the output should be [2, 3].
export function displayCommonValues(a: number[], b: number[]): number[] {
  // Your code here
  let newArray: number[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        newArray.push(a[i]);
      }
    }
  }
  return newArray;
}

// In a world of numbers, you are given two arrays containing natural numbers.
// The first array is sorted in ascending order, while the second array is sorted in descending order.
// Your task is to display the even values from both arrays in ascending order.
// For example, given the first array a = [1, 2, 4, 6] and the second array b = [10, 8, 5, 3],
// the output should be [2, 4, 6, 8, 10].
export function displayEvenValues(a: number[], b: number[]): number[] {
  // Your code here
  let newArray: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      newArray.push(a[i]);
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (b[j] % 2 === 0) {
      newArray.push(b[j]);
    }
  }
  for (let k = 0; k < newArray.length; k++) {
    if (newArray[k] > newArray[k + 1]) {
      let temp = newArray[k];
      newArray[k] = newArray[k + 1];
      newArray[k + 1] = temp;
    }
  }

  return newArray;
}

// In a magical realm of numbers, you are given two sets of natural numbers.
// Your task is to display both the union and the intersection of these two sets.
// The union should contain all unique elements from both sets,
// while the intersection should contain only the elements that are present in both sets.
// For example, given set A = {1, 2, 3} and set B = {2, 3, 4},
// the union should be {1, 2, 3, 4} and the intersection should be {2, 3}.
export function displayUnionAndIntersection(
  setA: number[],
  setB: number[]
): { union: number[]; intersection: number[] } {
  // Your code here

  let union: number[] = [];
  let i = 0;
  let j = 0;

  while (i < setA.length && j < setB.length) {
    if (setA[i] < setB[j]) {
      union.push(setA[i]);
      i++;
    } else if (setB[j] < setA[i]) {
      union.push(setB[j]);
      j++;
    } else {
      union.push(setA[i]);
      i++;
      j++;
    }
  }

  while (i < setA.length) {
    union.push(setA[i]);
    i++;
  }

  while (j < setB.length) {
    union.push(setB[j]);
    j++;
  }

  let intersection: number[] = [];
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      if (setA[i] === setB[j]) {
        intersection.push(setA[i]);
      }
    }
  }

  let newObject = {
    union: union,
    intersection: intersection,
  };

  return newObject;
}

// In a world of natural numbers, you are given a natural number x and two arrays, a and b,
// containing n and m elements respectively. Both arrays are sorted in strictly increasing order.
// Your task is to display the multiples of x that are present in only one of the two arrays,
// while maintaining ascending order in the output.
// For example, given x = 2, a = [2, 4, 6, 8] and b = [1, 2, 3, 4],
// the output should be [6, 8] since 2 and 4 are present in both arrays.
export function displayUniqueMultiples(
  x: number,
  a: number[],
  b: number[]
): number[] {
  // Your code here
  let newArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      if (a[i] % x === 0) {
        newArray.push(a[i]);
      }
      i++;
    } else if (b[j] < a[i]) {
      if (b[j] % x === 0) {
        newArray.push(b[j]);
      }
      j++;
    } else {
      i++;
      j++;
    }
  }

  while (i < a.length) {
    if (a[i] % x === 0) {
      newArray.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (b[j] % x === 0) {
      newArray.push(b[j]);
    }
    j++;
  }

  return newArray;
}

// In a world of numbers, you are given two arrays, a and b,
// containing natural numbers. Your task is to display the elements
// that are present in array a but not in array b.
// For example, given a = [1, 2, 3, 4] and b = [3, 4, 5],
// the output should be [1, 2].
export function displayElementsInAOnly(a: number[], b: number[]): number[] {
  // Your code here
  let newArray: number[] = [];
  let temp = false;
  for (let i = 0; i < a.length; i++) {
    temp = true;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        temp = false;
        break;
      }
    }
    if (temp) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}

// In a kingdom of numbers, you are given two arrays, a and b,
// containing natural numbers. Your task is to count the number of
// elements that are common between the two arrays.
// For example, given a = [1, 2, 3, 4] and b = [3, 4, 5],
// the output should be 2 since the common elements are {3, 4}.
export function countCommonElements(a: number[], b: number[]): number {
  // Your code here
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        counter++;
      }
    }
  }
  return counter;
}

// In a land of numbers, you are given three arrays, a, b, and c,
// containing natural numbers. Your task is to display the elements
// that are common to all three arrays, while maintaining ascending
// order in the output.
// For example, given a = [1, 2, 3, 4], b = [2, 3, 5], and c = [3, 6, 2],
// the output should be [2, 3].
export function displayCommonElementsFromThree(
  a: number[],
  b: number[],
  c: number[]
): number[] {
  // Your code here
  let newArray: number[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        if (a[i] === b[j] && a[i] === c[k]) {
          newArray.push(a[i]);
        }
      }
    }
  }
  return newArray;
}

// In a land of numbers, you are given two arrays, a and b,
// containing natural numbers. Your task is to merge the two arrays
// into a single array c. The merging should follow these rules:
// 1. If an element from array a is even, it should be included in
//    array c.
// 2. If an element from array b is odd, it should also be included
//    in array c.
// 3. The final array c should be sorted in ascending order and should
//    contain no duplicates.
// For example, given a = [1, 2, 3, 4] and b = [5, 6, 7, 8],
// the output should be [2, 4, 5, 6, 7, 8].
export function mergeAndFilterArrays(a: number[], b: number[]): number[] {
  // Your code here
  let newArray: number[] = [];
  let temp = false;
  for (let i = 0; i < a.length; i++) {
    temp = true;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] || a[i] % 2 !== 0) {
        temp = false;
        break;
      }
    }
    if (temp) {
      newArray.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 !== 0) {
      newArray.push(b[i]);
    }
  }
  let tempN: number = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > newArray[i + 1]) {
      tempN = newArray[i];
      newArray[i] = newArray[i + 1];
      newArray[i + 1] = tempN;
    }
  }
  return newArray;
}

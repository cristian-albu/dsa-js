// 1. A mathematician is investigating perfect numbers.
// She needs to determine if a number is a perfect number.
// A perfect number is a positive integer that is equal to the sum of its proper divisors.
// Can you help her confirm if the given number is a perfect number?

export function isPerfectNumber(num: number): boolean {
  // Implement logic here

  if (num <= 1) return false;

  let total = 1;

  // We assume all perfect numbers are even
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      total += i;

      let pair = num / i;

      if (i !== pair) {
        total += pair;
      }
    }
  }

  return num === total;
}

// 2. In a treasure hunt, players are given clues in the form of two coordinates
// (x1, y1) and (x2, y2). The players need to calculate the distance
// from the origin (0,0) to each of the points. The one with the farthest distance
// wins the prize. Can you assist them in finding the maximum distance from the origin?

export function findMaxDistanceFromOrigin(x1: number, y1: number, x2: number, y2: number): number {
  // Implement logic here

  return Math.max(Math.sqrt(x1 * x1 + y1 * y1), Math.sqrt(x2 * x2 + y2 * y2));
}

// 3. A statistician is analyzing two numbers representing the count of elements.
// He wants to determine the median of the two numbers without using arrays.
// Can you help him calculate the median of the two numbers?

export function calculateMedian(a: number, b: number): number {
  // Implement logic here

  return (a + b) / 2;
}

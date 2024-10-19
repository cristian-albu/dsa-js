import {
  bubbleSort,
  insertionSort,
  bogoSort,
  selectionSort,
  mergeSort,
  quickSort,
  displayDescendingDivisibleByTen,
  sortAroundMaximum,
  calculateMedian,
  sortBetweenMaxAndMin,
} from "./sorting";

describe("Sorting", () => {
  test("BubbleSort", () => {
    expect(bubbleSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("insertionSort", () => {
    expect(insertionSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("bogoSort", () => {
    expect(bogoSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("selectionSort", () => {
    expect(selectionSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("mergeSort", () => {
    expect(mergeSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("quickSort", () => {
    expect(quickSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });

  test("displayDescendingDivisibleByTen", () => {
    expect(displayDescendingDivisibleByTen([30, 15, 20, 5, 40])).toEqual([
      40, 30, 20,
    ]);
  });

  test("sortAroundMaximum", () => {
    expect(sortAroundMaximum([3, 5, 2, 8, 1, 4])).toEqual([2, 3, 5, 8, 4, 1]);
  });

  test("calculateMedian", () => {
    expect(calculateMedian([3, 1, 2, 5])).toEqual(2.5);
  });

  test("sortBetweenMaxAndMin", () => {
    expect(sortBetweenMaxAndMin([3, 5, 2, 8, 1, 4])).toEqual([
      3, 1, 2, 4, 5, 8,
    ]);
  });
});

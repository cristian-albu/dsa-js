import {
  countCommonElements,
  displayCommonElementsFromThree,
  displayCommonValues,
  displayElementsInAOnly,
  displayEvenValues,
  displayUnionAndIntersection,
  displayUniqueMultiples,
  displayUniqueValues,
  mergeAndFilterArrays,
  mergeSortedArrays,
} from ".";

describe("interclassification", () => {
  test("mergeSortedArrays", () => {
    expect(mergeSortedArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSortedArrays([1, 2, 4], [3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSortedArrays([1, 2, 4], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("displayUniqueValues", () => {
    expect(displayUniqueValues([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(displayUniqueValues([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("displayCommonValues", () => {
    expect(displayCommonValues([1, 2, 3, 4], [2, 3, 6, 8])).toEqual([2, 3]);
    expect(displayCommonValues([2, 3, 4], [1, 2, 3, 4])).toEqual([2, 3, 4]);
  });
  test("displayEvenValues", () => {
    expect(displayEvenValues([1, 2, 3, 4, 6], [10, 7, 6, 5, 3, 1])).toEqual([2, 4, 6, 10]);
  });
  test("displayUnionAndIntersection", () => {
    expect(displayUnionAndIntersection([1, 2, 3], [2, 3, 4])).toStrictEqual({ union: [1, 2, 3, 4], intersection: [2, 3] });
  });
  test("displayUniqueMultiples", () => {
    expect(displayUniqueMultiples(2, [2, 4, 6, 8], [1, 2, 3, 4])).toEqual([6, 8]);
  });
  test("displayElementsInAOnly", () => {
    expect(displayElementsInAOnly([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2]);
  });
  test("countCommonElements", () => {
    expect(countCommonElements([1, 2, 3, 4], [3, 4, 5])).toBe(2);
  });
  test("displayCommonElementsFromThree", () => {
    expect(displayCommonElementsFromThree([1, 2, 3, 4], [2, 3, 5], [3, 6, 2])).toEqual([2, 3]);
  });
  test("mergeAndFilterArrays", () => {
    expect(mergeAndFilterArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([2, 4, 5, 6, 7, 8]);
    expect(mergeAndFilterArrays([1, 2, 3, 4], [5, 6, 7, 8, 8])).toEqual([2, 4, 5, 6, 7, 8]);
  });
});

import {
  mergeSortedArrays,
  displayUniqueValues,
  displayCommonValues,
  displayEvenValues,
  displayUnionAndIntersection,
  displayUniqueMultiples,
  displayElementsInAOnly,
  countCommonElements,
  displayCommonElementsFromThree,
  mergeAndFilterArrays,
} from "./interclassification";

describe("Interclassification", () => {
  test("mergeSortedArrays", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("displayUniqueValues", () => {
    expect(displayUniqueValues([1, 2, 3], [2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("displayCommonValues", () => {
    expect(displayCommonValues([1, 2, 3, 4], [2, 3, 5, 6])).toEqual([2, 3]);
  });

  test("displayEvenValues", () => {
    expect(displayEvenValues([1, 2, 4, 6], [10, 8, 5, 3])).toEqual([
      2, 4, 6, 8, 10,
    ]);
  });

  test("displayUnionAndIntersection", () => {
    expect(displayUnionAndIntersection([1, 2, 3], [2, 3, 4])).toStrictEqual({
      union: [1, 2, 3, 4],
      intersection: [2, 3],
    });
  });
  test("displayUniqueMultiples", () => {
    expect(displayUniqueMultiples(2, [2, 4, 6, 8], [1, 2, 3, 4])).toEqual([
      6, 8,
    ]);
  });

  test("displayElementsInAOnly", () => {
    expect(displayElementsInAOnly([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2]);
  });

  test("countCommonElements", () => {
    expect(countCommonElements([1, 2, 3, 4], [3, 4, 5])).toEqual(2);
  });

  test("displayCommonElementsFromThree", () => {
    expect(
      displayCommonElementsFromThree([1, 2, 3, 4], [2, 3, 5], [3, 6, 2])
    ).toEqual([2, 3]);
  });

  test("mergeAndFilterArrays01", () => {
    expect(mergeAndFilterArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([
      2, 4, 5, 7,
    ]);
  });

  test("mergeAndFilterArrays02", () => {
    expect(mergeAndFilterArrays([1, 2, 3, 4], [7, 6, 5, 8])).toEqual([
      2, 4, 5, 7,
    ]);
  });
});

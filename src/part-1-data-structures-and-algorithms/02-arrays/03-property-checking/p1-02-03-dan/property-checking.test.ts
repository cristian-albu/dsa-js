import {
    areAllElementsEven,
    areAllElementsDistinct,
    isSortedAscending,
    areEvenNumbersSorted,
    allElementsHaveEvenNumberOfDigits,
    areAllElementsMultiplesOfLast,
    isAlternatingArray,
    areArraysEqual,
    areElementsInInterval,
    allNumbersHaveDistinctDigits
} from "./property-checking"

describe("Property Checking", () => {
    test("areAllElementsEven01", () => {
        expect(areAllElementsEven([1, 2, 3, 4])).toEqual(false)
    })

    test("areAllElementsEven02", () => {
        expect(areAllElementsEven([2, 4, 6, 8])).toEqual(true)
    })

    test("areAllElementsDistinct01", () => {
        expect(areAllElementsDistinct([1, 2, 4, 5])).toEqual(true)
    })

    test("areAllElementsDistinct02", () => {
        expect(areAllElementsDistinct([1, 1, 2, 8])).toEqual(false)
    })

    test("isSortedAscending01", () => {
        expect(isSortedAscending([1, 4, 5, 8])).toEqual(true)
    })

    test("isSortedAscending02", () => {
        expect(isSortedAscending([1, 9, 2, 4])).toEqual(false)
    })

    test("areEvenNumbersSorted01", () => {
        expect(areEvenNumbersSorted([1, 2, 3, 4, 7, 8])).toEqual(true)
    })

    test("areEvenNumbersSorted02", () => {
        expect(areEvenNumbersSorted([1, 6, 3, 4, 7, 8])).toEqual(false)
    })

    test("allElementsHaveEvenNumberOfDigits01", () => {
        expect(allElementsHaveEvenNumberOfDigits([1, 12, 23, 233, 4224])).toEqual(false)
    })

    test("allElementsHaveEvenNumberOfDigits02", () => {
        expect(allElementsHaveEvenNumberOfDigits([11, 12, 23, 23, 4224])).toEqual(true)
    })

    test("areAllElementsMultiplesOfLast01", () => {
        expect(areAllElementsMultiplesOfLast([6,12, 18, 3])).toEqual(true)
    })

    test("areAllElementsMultiplesOfLast02", () => {
        expect(areAllElementsMultiplesOfLast([6,12, 18, 4])).toEqual(false)
    })

    test("isAlternatingArray01", () => {
        expect(isAlternatingArray([1, 1, 0, 1])).toEqual(false)
    })

    test("isAlternatingArray02", () => {
        expect(isAlternatingArray([1, 0, 1, 0])).toEqual(true)
    })

    test("areArraysEqual01", () => {
        expect(areArraysEqual([2, 4, 6, 8], [1, 2, 4, 6, 8])).toEqual(false)
    })

    test("areArraysEqual02", () => {
        expect(areArraysEqual([2, 4, 6, 8], [2, 4, 6, 8])).toEqual(true)
    })

    test("areElementsInInterval01", () => {
        expect(areElementsInInterval([3, 5, 6, 9])).toEqual(true)
    })

    test("areElementsInInterval02", () => {
        expect(areElementsInInterval([3, 5, 46, 9])).toEqual(false)
    })

    test("allNumbersHaveDistinctDigits01", () => {
        expect(allNumbersHaveDistinctDigits([123,456, 789])).toEqual(true)
    })

    test("allNumbersHaveDistinctDigits02", () => {
        expect(allNumbersHaveDistinctDigits([112, 556 ,889])).toEqual(false)
    })
})
import {
    pushExample,
    popExample,
    shiftExample,
    unshiftExample,
    insertAtIndex,
    removeFromIndex,
    removePrimeNumbers,
    removeEvenNumbers,
    insertDoubleAfterEven,
    insertSquareRootBeforePerfectSquare
} from "./insertions-and-deletions";

describe("Insertions and Deletions", () => {
    test("pushExample01", () => {
        expect(pushExample([5, 2, 4], 2)).toEqual([5, 2, 4, 2])
    })

    test("pushExample02", () => {
        expect(pushExample([], 2)).toEqual([2])
    })

    test("popExample01", () => {
        expect(popExample([2, 4, 5, 7])).toStrictEqual({modifiedArray: [2, 4, 5], removedNumber: 7})
    })

    test("popExample02", () => {
        expect(popExample([1, 3, 6, 9])).toStrictEqual({modifiedArray: [1, 3, 6], removedNumber: 9})
    })

    test("shiftExample", () => {
        expect(shiftExample([2, 4, 6, 3])).toStrictEqual({modifiedArray: [4, 6, 3], removedNumber: 2})
    })

    test("unshiftExample", () => {
        expect(unshiftExample([3, 5, 6], 9)).toEqual([9, 3, 5, 6])
    })

    test("insertAtIndex", () => {
        expect(insertAtIndex([3, 4, 6], 5, 2)).toEqual([3, 4, 5, 6])
    })

    test("removeFromIndex", () => {
        expect(removeFromIndex([3, 4, 6, 7], 2)).toStrictEqual({modifiedArray: [3, 4, 7], removedNumber: 6})
    })

    test("removePrimeNumbers", () => {
        expect(removePrimeNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 4, 6])
        expect(removePrimeNumbers([1, 3, 4, 5, 6])).toEqual([1, 4, 6])
    })

    test("removeEvenNumbers", () => {
        expect(removeEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5])
    })

    test("insertDoubleAfterEven", () => {
        expect(insertDoubleAfterEven([1, 2, 3, 4, 5])).toEqual([1, 2, 4, 3, 4, 8, 5])
    })

    test("insertSquareRootBeforePerfectSquare", () => {
        expect(insertSquareRootBeforePerfectSquare([1, 2, 3, 4, 5, 9])).toEqual([1, 1, 2, 3, 2, 4, 5, 3, 9])
    })
})
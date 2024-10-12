import {
    parseNumbers,
    convertTemperaturesToFahrenheit,
    parseCsvData,
    countWordsInStories,
    absoluteDifferenceEvenOddCount,
    replaceLastPrimeWithZero,
    displayMultiplesOfLastElement,
    findMaxAndMin,
    countElementsEqualToDifference,
    isMountainNumber,
} from "./parsing";

describe("Arrays", () => {

    test("parseNumbers", () => {
        expect(parseNumbers(["1", "2", "3"])).toEqual([1, 2, 3]);
    });
    test("zero should be zero", () => {
        expect(parseNumbers(["0"])).toEqual([0]);
    });

    test("convert01", () => {
        expect(convertTemperaturesToFahrenheit(["32", "54", "87"])).toEqual(["89", "129", "188"]);
    });

    test("convert02", () => {
        expect(convertTemperaturesToFahrenheit(["0"])).toEqual(["32"]);
    });

    test("convert03", () => {
        expect(convertTemperaturesToFahrenheit(["-15"])).toEqual(["5"]);
    });

    test("parseCsv01", () => {
        expect(parseCsvData(["Vasile,42", "Adelina,25", "Gicu,69"])).toEqual([["Vasile", "42"], ["Adelina", "25"], ["Gicu", "69"]]);
    })

    test("stories01", () => {
        expect(countWordsInStories(["Once upon a time", "In a galaxy far, far away"])).toEqual([4, 6]);
    })

    test("stories02", () => {
        expect(countWordsInStories(["You don't stop when you're tired", "You stop when you're done"])).toEqual([6, 5]);
    })

    test("absoluteDifference01", () => {
        expect(absoluteDifferenceEvenOddCount([1, 2, 3, 4])).toEqual(0);
    })

    test("absoluteDifference02", () => {
        expect(absoluteDifferenceEvenOddCount([5, 8, 7, 1, 25])).toEqual(3);
    })


    test("replacePrime1", () => {
        expect(replaceLastPrimeWithZero([4, 6, 5, 8, 11])).toEqual([4, 6, 5, 8, 0])
    });
    
    test("replacePrime2", () => {
        expect(replaceLastPrimeWithZero([2, 4, 7, 9, 13, 14])).toEqual([2, 4, 7, 9, 0, 14])
    });

    test("multiple01", () => {
        expect(displayMultiplesOfLastElement([3, 5, 20, 4])).toEqual([20]);
    })

    test("multiple02", () => {
        expect(displayMultiplesOfLastElement([8, 9, 30, 50, 5])).toEqual([30, 50]);
    })

    test("MinAndMax01", () => {
        expect(findMaxAndMin([3, 7, 2, 9, 4])).toEqual({max: 9, min: 2});
    })
    
    test("MinAndMax02", () => {
        expect(findMaxAndMin([4, 14, 12, 7, 11, 0])).toEqual({max: 14, min: 0});
    })

    test("elements equal to difference01", () => {
        expect(countElementsEqualToDifference([1, 6, 3, 9, 8])).toEqual(1);
    })
    
    test("elements equal to difference02", () => {
        expect(countElementsEqualToDifference([5, 8, 3, 4, 7, 5])).toEqual(2);
    })

    test("number is mountain 01", () => {
        expect(isMountainNumber(14696)).toEqual(true);
    })

    test("number is mountain 02", () => {
        expect(isMountainNumber(15951)).toEqual(true);
    })

    test("number is mountain 03", () => {
        expect(isMountainNumber(1)).toEqual(false);
    })

    test("number is mountain 04", () => {
        expect(isMountainNumber(98789)).toEqual(false);
    })
})


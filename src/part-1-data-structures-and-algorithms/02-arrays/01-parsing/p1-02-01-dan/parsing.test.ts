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

})
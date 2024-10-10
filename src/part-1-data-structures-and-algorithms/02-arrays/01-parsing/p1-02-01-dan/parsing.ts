// Once upon a time in a land of numbers, you received a list of strings that represent numbers.
// Your task is to convert these strings into an array of numbers.
// For example, given ["1", "2", "3"], your output should be [1, 2, 3].
export function parseNumbers(stringArray: string[]): number[] {
    // Your code here
   let result = new Array(stringArray.length);
   for (let i = 0; i < stringArray.length; i++) {
    let number = Number(stringArray[i]);
    result[i] = number;
   }
   return result;

  }
  
  // The temperature is measured in Celsius, but you need to convert it to Fahrenheit.
  // You are given an array of temperature strings in Celsius. Your task is to convert them to Fahrenheit.
  // For example, given ["0", "100"], your output should be ["32", "212"].
  export function convertTemperaturesToFahrenheit(celsiusArray: string[]): string[] {
    // Your code here
      let fahrenheit = [];
      for (let i = 0; i < celsiusArray.length; i++) {
        fahrenheit[i] = (Math.floor((Number(celsiusArray[i]) * 1.8) + 32)).toString();       
      }

    return fahrenheit;
  }
  
  // You have been given a treasure map in the form of CSV (Comma-Separated Values) strings.
  // Your task is to parse the CSV strings into arrays of strings.
  // For example, given ["name,age", "Alice,30", "Bob,25"], your output should be
  // [["name", "age"], ["Alice", "30"], ["Bob", "25"]].
  export function parseCsvData(csvArray: string[]): string[][] {
    // Your code here
    let result: any = [];
    let tempString = "";
    
    for (let i = 0; i < csvArray.length; i++) {
      let string = csvArray[i];
      let index = 0;
      result[i] = [];
      for (let j = 0; j < string.length; j++) {
        if (string[j] !== ",") {
            tempString += string[j];
          } else {
            result[i][index] = tempString;
            index++;
            tempString = "";
          }        
      }
      result[i][index] = tempString;
      tempString = "";
    }
    return result;
  }
  
  // In a library of scrolls, each scroll contains a story.
  // Your task is to count how many words are in each story string.
  // Given ["Once upon a time", "In a galaxy far, far away"],
  // the output should be [4, 6].
  export function countWordsInStories(stories: string[]): number[] {
    // Your code here
    
    let result = [];

    for (let i = 0; i < stories.length; i++) {
      let counter = 1;
      let string = stories[i];
      for (let j = 0; j < string.length; j++) {
        if (string[j] === " ") {
          counter++;
        }
      }
      result[i] = counter;
    }

    return result;
  }
  
  // In a mystical land of numbers, you are given an array containing natural numbers.
  // Your task is to determine the absolute difference between the count of even values
  // and the count of odd values in the array.
  // For example, given [1, 2, 3, 4], the absolute difference should be 0,
  // since there are two even numbers (2, 4) and two odd numbers (1, 3).
  export function absoluteDifferenceEvenOddCount(numbers: number[]): number {
    // Your code here
    return 0;
  }
  
  // In a land of natural numbers, you are given an array containing n natural numbers.
  // Your task is to find the last prime number in the array and replace it with 0.
  // After that, display the modified array.
  // For example, given [4, 6, 5, 8, 11], the output should be
  // [4, 6, 5, 8, 0], since 11 is the last prime number.
  export function replaceLastPrimeWithZero(numbers: number[]): number[] {
    // Your code here
    return []
  }
  
  // In a mystical realm of natural numbers, you are given an array containing n natural numbers.
  // Your task is to find and display all the elements in the array that are multiples of the last element.
  // For example, given [3, 6, 9, 12, 4], the output should be [12],
  // since 12 is the only element that is a multiple of the last element, 4.
  export function displayMultiplesOfLastElement(numbers: number[]): number[] {
    // Your code here
    return []
  }
  
  // In a vast landscape of numbers, you are given an array containing n elements.
  // Your task is to determine both the maximum and minimum values among the elements in the array.
  // For example, given [3, 7, 2, 9, 4], the maximum should be 9 and the minimum should be 2.
  export function findMaxAndMin(numbers: number[]): { max: number; min: number } {
    // Your code here
    return {max:2,
      min: 1 }
  }
  
  // In the kingdom of numbers, you are given an array containing n natural numbers.
  // Your task is to determine how many elements in the array are equal to the difference
  // between the maximum and minimum values of the array.
  // For example, given [3, 7, 2, 9, 4], the difference is 9 - 2 = 7,
  // and there is one element (7) that equals this difference.
  export function countElementsEqualToDifference(numbers: number[]): number {
    // Your code here
    return 0
  }
  
  // In the enchanted mountains of numbers, a number is considered a "mountain"
  // if it first increases to a peak and then decreases.
  // Your task is to determine if a given natural number follows this pattern.
  // For example, 12321 is a mountain number (increases to 3, then decreases),
  // while 12345 is not, as it only increases.
  export function isMountainNumber(number: number): boolean {
    // Your code here
    return false
  }
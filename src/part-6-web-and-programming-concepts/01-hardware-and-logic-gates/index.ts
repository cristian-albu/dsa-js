// Tip, look up these function names and you will find diagrams

// Try to implement these with the base logic gates

// 1. Full Adder
// Problem: Create a function that implements a full adder. It should take three binary inputs (A, B, and carry-in)
// and return an object containing the sum and carry-out.
// Real-life Counterpart: In digital circuits, a full adder is used in arithmetic logic units (ALUs)
// for binary addition operations, accommodating carry-ins from previous additions.
export function fullAdder(a: number, b: number, carryIn: number) {
  // Implementation goes here
}

// 2. Multiplexer (2-to-1)
// Problem: Write a function for a 2-to-1 multiplexer. It should take two binary inputs (A and B) and a select line (S).
// The function should return the selected input based on the value of S.
// Real-life Counterpart: A multiplexer is used in digital systems to choose between multiple inputs
// based on control signals (select lines).
export function multiplexer(a: number, b: number, s: number) {
  // Implementation goes here
}

// 3. Demultiplexer (1-to-2)
// Problem: Implement a 1-to-2 demultiplexer. It should take one binary input and a select line (S),
// returning an array representing the output lines.
// Real-life Counterpart: A demultiplexer is used to route one input signal to one of several output lines
// based on a control signal, often in communication systems or data transmission.
export function demultiplexer(input: number, s: number) {
  // Implementation goes here
}

// 4. 4-Bit Binary Adder
// Problem: Create a function that adds two 4-bit binary numbers represented as actual binary literals (e.g., 0b1100).
// Use full adder logic to perform the addition bit by bit.
// Real-life Counterpart: Binary adders are used in the ALUs of CPUs to add binary numbers.
// They handle small bitwise operations, often used in combination for larger calculations.
export function binaryAdder(a: number, b: number) {
  // Implementation goes here
}

// 5. Binary to Decimal Converter
// Problem: Write a function that converts a binary number to its decimal equivalent.
// Real-life Counterpart: Binary numbers are how computers represent and store data, but humans often work in decimal.
// This conversion is essential when interpreting computer outputs or converting user inputs to machine-readable formats.
export function binaryToDecimal(binaryNum: number) {
  // Implementation goes here
}

// 6. 4-to-1 Multiplexer
// Problem: Create a function for a 4-to-1 multiplexer. It should take four binary inputs (A, B, C, D)
// and two select lines (S0, S1).
// Real-life Counterpart: A 4-to-1 multiplexer selects one of four inputs based on two control signals,
// commonly used in data routing, switching circuits, and communication systems.
export function multiplexer4to1(a: number, b: number, c: number, d: number, s0: number, s1: number) {
  // Implementation goes here
}

// 7. Binary Comparator
// Problem: Write a function that compares two binary numbers.
// It should return 1 if A > B, 0 if A = B, and -1 if A < B.
// Real-life Counterpart: Binary comparators are used in circuits to compare binary numbers
// in sorting, decision-making, or data analysis processes.
export function binaryComparator(a: number, b: number) {
  // Implementation goes here
}

// 8. 4-Bit Shift Register
// Problem: Implement a function that simulates a 4-bit shift register. It should take a binary number
// and a direction (either 'left' or 'right'), shifting the bits accordingly and padding with zeros.
// Real-life Counterpart: Shift registers are used in hardware for bit manipulation,
// such as data storage, transfer, or performing arithmetic operations.
export function shiftRegister(input: number, direction: "left" | "right") {
  // Implementation goes here
}

// 9. Parity Bit Generator
// Problem: Write a function that generates an even parity bit for a binary number.
// The parity bit should be 1 if the number of 1s is odd, and 0 if the number of 1s is even.
// Real-life Counterpart: Parity bits are used in error detection for digital communication and storage systems.
export function parityBitGenerator(input: number) {
  // Implementation goes here
}

// 10. 8-Bit Multiplier
// Problem: Implement a function that multiplies two 8-bit binary numbers represented as actual binary literals (e.g., 0b1010).
// The function should return the binary number result of their product.
// Real-life Counterpart: Binary multiplication is used in digital systems for arithmetic operations,
// often required for processing larger amounts of data in CPUs.
export function binaryMultiplier(a: number, b: number) {
  // Implementation goes here
}

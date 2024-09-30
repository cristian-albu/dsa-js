import {
  fullAdder,
  multiplexer,
  demultiplexer,
  binaryAdder,
  binaryToDecimal,
  multiplexer4to1,
  binaryComparator,
  shiftRegister,
  parityBitGenerator,
  binaryMultiplier,
} from ".";

describe("Full Adder", () => {
  it("should correctly compute sum and carry out", () => {
    expect(fullAdder(0b0, 0b0, 0b0)).toEqual({ sum: 0b0, carryOut: 0b0 });
    expect(fullAdder(0b1, 0b1, 0b0)).toEqual({ sum: 0b0, carryOut: 0b1 });
  });
});

describe("Multiplexer (2-to-1)", () => {
  it("should select the correct input based on the select line", () => {
    expect(multiplexer(0b0, 0b1, 0b0)).toBe(0b0); // Selects a
    expect(multiplexer(0b0, 0b1, 0b1)).toBe(0b1); // Selects b
  });
});

describe("Demultiplexer (1-to-2)", () => {
  it("should correctly route input to the correct output based on the select line", () => {
    expect(demultiplexer(0b1, 0b0)).toEqual([0b1, 0b0]); // Route input to the first line
    expect(demultiplexer(0b1, 0b1)).toEqual([0b0, 0b1]); // Route input to the second line
  });
});

describe("4-Bit Binary Adder", () => {
  it("should correctly add two 4-bit binary numbers", () => {
    expect(binaryAdder(0b1100, 0b0011)).toBe(0b1111);
    expect(binaryAdder(0b1111, 0b0001)).toBe(0b10000); // Overflow case
  });
});

describe("Binary to Decimal Converter", () => {
  it("should correctly convert binary to decimal", () => {
    expect(binaryToDecimal(0b1101)).toBe(13);
    expect(binaryToDecimal(0b10010)).toBe(18);
  });
});

describe("4-to-1 Multiplexer", () => {
  it("should select the correct input based on select lines", () => {
    expect(multiplexer4to1(0b0, 0b1, 0b0, 0b1, 0b0, 0b0)).toBe(0b0); // Select a
    expect(multiplexer4to1(0b0, 0b1, 0b0, 0b1, 0b1, 0b0)).toBe(0b1); // Select b
  });
});

describe("Binary Comparator", () => {
  it("should correctly compare two binary numbers", () => {
    expect(binaryComparator(0b1100, 0b1100)).toBe(0); // Equal
    expect(binaryComparator(0b1101, 0b1100)).toBe(1); // A > B
    expect(binaryComparator(0b1010, 0b1100)).toBe(-1); // A < B
  });
});

describe("4-Bit Shift Register", () => {
  it("should correctly shift bits left or right", () => {
    expect(shiftRegister(0b1011, "left")).toBe(0b0110); // Left shift
    expect(shiftRegister(0b1011, "right")).toBe(0b0101); // Right shift
  });
});

describe("Parity Bit Generator", () => {
  it("should correctly generate the parity bit for even and odd parity", () => {
    expect(parityBitGenerator(0b1100)).toBe(0b0); // Even number of 1s
    expect(parityBitGenerator(0b1101)).toBe(0b1); // Odd number of 1s
  });
});

describe("8-Bit Binary Multiplier", () => {
  it("should correctly multiply two 8-bit binary numbers", () => {
    expect(binaryMultiplier(0b1010, 0b0011)).toBe(0b11110);
    expect(binaryMultiplier(0b1111, 0b1111)).toBe(0b11100001);
  });
});

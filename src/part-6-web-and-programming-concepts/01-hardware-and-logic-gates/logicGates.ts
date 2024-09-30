export type Bit = 0 | 1;

/**
 * a === 0, o === 1;
 * a === 1, o === 0
 */
export function notGate(a: Bit): Bit {
  return a === 1 ? 0 : 1;
}

/**
 * a === 0, b === 0, o === 0;
 * a === 0, b === 1, o === 0;
 * a === 1, b === 0, o === 0;
 * a === 1, b === 1, o === 1;
 */
export function andGate(a: Bit, b: Bit): Bit {
  return a === 1 && b === 1 ? 1 : 0;
}

/**
 * a === 0, b === 0, o === 1;
 * a === 0, b === 1, o === 1;
 * a === 1, b === 0, o === 1;
 * a === 1, b === 1, o === 0;
 */
export function nandGate(a: Bit, b: Bit): Bit {
  return notGate(andGate(a, b));
}

/**
 * a === 0, b === 0, o === 0;
 * a === 0, b === 1, o === 1;
 * a === 1, b === 0, o === 1;
 * a === 1, b === 1, o === 1;
 */
export function orGate(a: Bit, b: Bit): Bit {
  return nandGate(notGate(a), notGate(b));
}

/**
 * a === 0, b === 0, o === 1;
 * a === 0, b === 1, o === 0;
 * a === 1, b === 0, o === 0;
 * a === 1, b === 1, o === 0;
 */
export function norGate(a: Bit, b: Bit): Bit {
  return notGate(orGate(a, b));
}

/**
 * a === 0, b === 0, o === 0;
 * a === 0, b === 1, o === 1;
 * a === 1, b === 0, o === 1;
 * a === 1, b === 1, o === 0;
 */
export function xorGate(a: Bit, b: Bit): Bit {
  return andGate(orGate(a, b), nandGate(a, b));
}

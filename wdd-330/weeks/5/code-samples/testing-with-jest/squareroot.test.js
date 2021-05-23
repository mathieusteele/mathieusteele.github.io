function squareRoot(number) {
  "use strict";
  if (number < 0) {
    throw new RangeError("You can't find the square root of negative numbers");
  }
  return Math.sqrt(number);
}

test("square root of 4 is 2", () => {
  expect(squareRoot(4)).toBe(2);
});

test("square root of 81 is 9", () => {
  expect(squareRoot(81)).toBe(9);
});

test("square root of -1 throws an Error", () => {
  expect(() => {
    squareRoot(-1);
  }).toThrow("You can't find the square root of negative numbers");
});

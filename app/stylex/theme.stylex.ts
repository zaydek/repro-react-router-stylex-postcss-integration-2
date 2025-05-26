import * as stylex from "@stylexjs/stylex";

// Proof of concept that StyleX variables work
export const vars = stylex.defineVars({
  red: "red",
});

// Proof of concept that StyleX constants work
export const consts = stylex.defineConsts({
  blue: "blue",
});

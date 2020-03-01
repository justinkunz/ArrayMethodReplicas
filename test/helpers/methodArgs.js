// This file is for storing arguments for testing replicated array methods
// As more prototypes are replicated, their testing arguments will be added

// Callback fns for repliacted methods
const conditionCb = ele => ele >= 100 || ele === "h";
const reduceCb1 = (a, c) => a + c;
const reduceCb2 = (a, c) => {
  a[c.name] = c.val;
  return a;
};

// Methods for each replicated type.
// [] of tests to run, each with
// nested [] of argument for each test
const methodArgs = {
  fill: [["l", 1, 14], ["foobar", 77], [33, 999999], ["fiz"]],
  filter: [[conditionCb]],
  reduce: [[reduceCb1], [reduceCb2]],
  some: [[conditionCb]],
  findIndex: [[conditionCb]],
  every: [[conditionCb]],
  indexOf: [[0], ["a"], []],
  concat: [[0], ["a"], []],
  join: [[], [""], [" and "]],
  flat: [[], [Infinity], [1], [2]],
  includes: [[50], ["a"], [{ foo: "bar" }], []]
};

module.exports = methodArgs;

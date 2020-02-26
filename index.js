require("./prototypes");
const compareValues = require("./compareValues");

/**
 * Validates replicated method (from prototypes file) generates
 * same result as original method
 *
 * @param {Array} arr Array to test
 * @param {String} method Method & Replica to test
 * @param  {...any} args Optional arguments for methos
 */
const validate = (arr, method, ...args) => {
  // Call w/ copy of array to prevent direct muation
  const ogResult = [...arr][method](...args);
  const replicated = [...arr][`_${method}`](...args);
  const isSame = compareValues(ogResult, replicated);

  if (isSame) {
    console.log(
      `✅   ${method.toUpperCase()}:: replica matches original result`
    );
  } else {
    console.log(
      `👎    Method ${method.toUpperCase()}:: replica does not matches original result\n`
    );
    console.log({ ogResult, replicated });
  }
};

// Reduce
const reduce_test_fn_1 = (a, c) => a + c;
const reduce_test_fn_2 = (a, c) => {
  a[c.name] = c.val;
  return a;
};

const reduce_test_1 = [4, 3, 2, 7, 8];

const reduce_test_2 = [
  {
    name: "foo",
    val: "bar"
  },
  {
    name: "bar",
    val: "foo"
  },
  {
    name: "foo_bar",
    val: "foobar"
  }
];

validate(reduce_test_1, "reduce", reduce_test_fn_1);
validate(reduce_test_2, "reduce", reduce_test_fn_2, {});

// Index Of

const index_of_test_1 = [1, 5, 4, 2, 7, 68, 90];
const index_of_test_2 = ["test", 5, 5, 8, 8, 0, 0, 1, 2, 3, "test"];

validate(index_of_test_1, "indexOf", 34);
validate(index_of_test_2, "indexOf", 5);

// Concat

const concat_test_1 = [1, 5, 4, 7, 65, 43];
const concat_test_2 = ["test", 4, 35];

validate(concat_test_1, "concat", "hello");
validate(concat_test_2, "concat", [4, 6, 3, 3, 1]);

// Join
const join_test_1 = ["h", "e", "l", "l", "o"];
const join_test_2 = [34, "test", 18, 70, { foo: "bar" }];

validate(join_test_1, "join", "");
validate(join_test_2, "join");

//

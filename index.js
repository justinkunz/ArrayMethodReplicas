require("./prototypes");
const validate = require("./validate");

// Reduce --------------------------------
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

// Index Of --------------------------------

const index_of_test_1 = [1, 5, 4, 2, 7, 68, 90];
const index_of_test_2 = ["test", 5, 5, 8, 8, 0, 0, 1, 2, 3, "test"];

validate(index_of_test_1, "indexOf", 34);
validate(index_of_test_2, "indexOf", 5);

// Concat --------------------------------

const concat_test_1 = [1, 5, 4, 7, 65, 43];
const concat_test_2 = ["test", 4, 35];

validate(concat_test_1, "concat", "hello");
validate(concat_test_2, "concat", [4, 6, 3, 3, 1]);

// Join --------------------------------
const join_test_1 = ["h", "e", "l", "l", "o"];
const join_test_2 = [34, "test", 18, 70, { foo: "bar" }];

validate(join_test_1, "join", "");
validate(join_test_2, "join");

// Some --------------------------------
const some_test_fn_1 = ele => ele % 2 === 0;
const some_test_fn_2 = ele => isNaN(parseInt(ele));

const some_test_1 = [3, 5, 2, 2, 7, 4, 8, 9];
const some_test_2 = [7, 3, 5, 9, "hi"];

const some_test_3 = ["11", "5", 4, 8, 9];
const some_test_4 = ["17", 18, 19, "hello", 90];

validate(some_test_1, "some", some_test_fn_1);
validate(some_test_2, "some", some_test_fn_1);
validate(some_test_3, "some", some_test_fn_2);
validate(some_test_4, "some", some_test_fn_2);

// Standard Array Options
const standardObj = () => ({
  foo: "bar",
  baz: "foobar"
});
const strOptions = "qwertyuioplkjhgfdsazxcvbnmPOIUYTREWASDFGHJKLQAZXCVBNM";

// Building random array
const buildArray = (len, cb) => Array.apply(null, Array(len)).map(cb);

// Random Generators
const rand = (min = 1, max = 1000) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomString = () => strOptions[rand(0, strOptions.length - 1)];
const randomBool = () => Math.random() > 0.5;
const nested = () => generateRandomArray("any", 5);

const anyType = () => {
  const typeDefinitions = {
    number: rand,
    string: randomString,
    boolean: randomBool,
    object: standardObj,
    string_arr: () => generateRandomArray("string", 10),
    num_arr: () => generateRandomArray("number", 10)
  };

  const types = Object.keys(typeDefinitions);
  const randomType = types[rand(0, types.length - 1)];

  return typeDefinitions[randomType]();
};

const generateRandomArray = (type, len = rand()) => {
  switch (type) {
    case "number":
      return buildArray(len, () => rand());
    case "string":
      return buildArray(len, randomString);
    case "any":
      return buildArray(len, anyType);
    case "object":
      return buildArray(len, standardObj);
    case "nested":
      return buildArray(len, nested);
  }
};

module.exports = generateRandomArray;

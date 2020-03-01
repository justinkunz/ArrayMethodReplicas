const { terminalThemes } = require("./helpers");

/**
 * Validates replicated method (from prototypes file) generates
 * same result as original method
 *
 * @param {Array} arr Array to test
 * @param {String} method Method & Replica to test
 * @param  {...any} args Optional arguments for methos
 */
const validate = (arr, method, ...args) => {
  // Call w/ copy of array to prevent direct muation + for mutation comparison
  const copy1 = JSON.parse(JSON.stringify(arr));
  const copy2 = JSON.parse(JSON.stringify(arr));

  const original = copy1[method](...args);
  const replicated = copy2[`_${method}`](...args);

  const isSame = compareValues(original, replicated);
  const mutationsMatch = compareValues(copy1, copy2);

  if (!isSame) {
    console.log(
      `${
        terminalThemes.fail
      }${method.toUpperCase()}:: replica does not matches original result`
    );
  } else if (!mutationsMatch) {
    console.log(
      `${terminalThemes.fail}${method.toUpperCase()}:: Mutations do not match`
    );
  } else {
    console.log(
      `${
        terminalThemes.pass
      }${method.toUpperCase()}:: replica matches original result`
    );
  }

  return isSame && mutationsMatch;
};

/**
 * Validates if two values are the same
 *
 * Covers edge cases for types stored by reference and not by value
 */
const compareValues = (val1, val2) => {
  // Compares Object data types
  const _objComparison = (val1, val2) => {
    // Array comparision
    if (Array.isArray(val1)) {
      if (!Array.isArray(val2)) return false;
      if (val1.length !== val2.length) return false;

      for (let i = 0; i < val1.length; i++) {
        if (!compareValues(val1[i], val2[i])) return false;
      }

      return true;
    }

    if (Object.keys(val1).length !== Object.keys(val2).length) return false;

    for (const key in val1) {
      if (!compareValues(val1[key], val2[key])) return false;
    }
    return true;
  };
  // Ensures types match
  if (typeof val1 !== typeof val2) return false;

  switch (typeof val1) {
    case "object":
      return _objComparison(val1, val2);
    case "symbol":
      return false;
    default:
      return val1 === val2;
  }
};

module.exports = validate;

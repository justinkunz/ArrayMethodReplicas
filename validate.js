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

const compareValues = (val1, val2) => {
  if (typeof val1 !== typeof val2) return false;

  if (Array.isArray(val1)) {
    if (!Array.isArray(val2)) return false;
    if (val1.length !== val2.length) return false;

    for (let i = 0; i < val1.length; i++) {
      if (!compareValues(val1[i], val2[i])) return false;
    }

    return true;
  }
  if (typeof val1 === "object") {
    if (Object.keys(val1).length !== Object.keys(val2).length) return false;

    for (const key in val1) {
      if (!compareValues(val1[key], val2[key])) return false;
    }
  }

  return true;
};

module.exports = validate;

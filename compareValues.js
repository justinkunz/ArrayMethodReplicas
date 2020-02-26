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

module.exports = compareValues;

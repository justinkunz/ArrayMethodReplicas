const compareValues = require("./compareValues");

Array.prototype._reduce = function(cb, ogVal = 0) {
  let val = ogVal;
  for (let i = 0; i < this.length; i++) {
    val = cb(val, this[i]);
  }

  return val;
};

Array.prototype._indexOf = function(val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) return i;
  }

  return -1;
};

Array.prototype._concat = function(toAdd) {
  if (Array.isArray(toAdd)) {
    return [...this, ...toAdd];
  }

  return [...this, toAdd];
};

Array.prototype._join = function(delimiter = ",") {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += this[i] + delimiter;
  }
  return str;
};

Array.prototype._some = function(condition) {
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i], i, this)) return true;
  }

  return false;
};

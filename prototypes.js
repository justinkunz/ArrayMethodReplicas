Array.prototype._reduce = function(cb, ogVal) {
  let arr = ogVal ? [ogVal, ...this] : [...this];
  let val = arr[0];
  for (let i = 1; i < arr.length; i++) {
    val = cb(val, arr[i]);
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
  if (!toAdd && toAdd !== 0) return [...this];
  if (Array.isArray(toAdd)) {
    return [...this, ...toAdd];
  }

  return [...this, toAdd];
};

Array.prototype._join = function(delimiter = ",") {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += i === this.length - 1 ? this[i] : this[i] + delimiter;
  }
  return str;
};

Array.prototype._some = function(condition) {
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i], i, this)) return true;
  }

  return false;
};

Array.prototype._flat = function(iterations = 1) {
  if (iterations === Infinity) {
    return this._reduce((flat, toFlatten) => {
      return flat.concat(
        Array.isArray(toFlatten) ? toFlatten._flat(Infinity) : toFlatten
      );
    }, []);
  }

  let flat = this;
  for (i = 0; i < iterations; i++) {
    flat = [].concat.apply([], flat);
  }

  return flat;
};

Array.prototype._findIndex = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return i;
  }
  return -1;
};

Array.prototype._every = function(condition) {
  for (let i = 0; i < this.length; i++) {
    if (!condition(this[i], i, this)) return false;
  }
  return true;
};

Array.prototype._fill = function(val, start = 0, end = this.length) {
  const replaceStop = end > this.length ? this.length : end;
  for (let i = start; i < replaceStop; i++) {
    this[i] = val;
  }

  return this;
};

Array.prototype._filter = function(condition) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (condition(this[i], i, this)) arr.push(this[i]);
  }

  return arr;
};

Array.prototype._includes = function(itm) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === itm) return true;
  }
  return false;
};

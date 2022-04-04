function methodSlice(array, begin, end) {
  const arrSlice = [];
  if (arguments.length === 3) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      const i = array.indexOf(elem);
      if (i >= begin && i < end) {
        arrSlice.push(elem);
      }
    }
    if (end < 0) {
      array.reverse();
      // eslint-disable-next-line no-restricted-syntax
      for (const elem of array) {
        const i = array.indexOf(elem);
        if (i < Math.abs(begin) && i >= Math.abs(end)) {
          arrSlice.push(elem);
        }
      }
      arrSlice.reverse();
    }
    return arrSlice;
  }
  if (arguments.length === 2) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      if (array.indexOf(elem) >= begin) {
        arrSlice.push(elem);
      }
    }
    return arrSlice;
  }
  if (arguments.length === 1) {
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of array) {
      arrSlice.push(elem);
    }
    return arrSlice;
  }
  return undefined;
}
module.exports = methodSlice();

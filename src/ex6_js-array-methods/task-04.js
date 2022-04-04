function methodFilter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
module.exports = methodFilter;

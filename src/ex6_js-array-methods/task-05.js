function methodMap(arr, callback) {
  const newMappedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    newMappedArray.push(callback(arr[i], i, arr));
  }
  return newMappedArray;
}
module.exports = methodMap;

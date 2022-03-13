// eslint-disable-next-line consistent-return
function arrayElementsComparison(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0] === arr[i]) {
      return true;
    }
    return false;
  }
}
module.exports = arrayElementsComparison;

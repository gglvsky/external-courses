function reverseString(str) {
  const strArray = str.split('');
  const reverse = [];
  const x = str.length;
  for (let i = x - 1, j = 0; i >= 0; i -= 1) {
    reverse[j] = strArray[i];
    j += 1;
  }
  const reverseStr = reverse.join('');
  return reverseStr;
}
module.exports = reverseString;

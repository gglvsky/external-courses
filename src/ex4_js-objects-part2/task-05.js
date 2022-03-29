function findStringInString(str, substr) {
  if (str.indexOf(substr) !== -1) {
    return true;
  }
  return false;
}
module.exports = findStringInString;

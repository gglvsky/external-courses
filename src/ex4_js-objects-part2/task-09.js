function stringInString(string, newString, number) {
  const str = string.split(' ');
  str.splice(number + 1, 0, newString);
  return str.join(' ');
}
module.exports = stringInString;

function compareStringAndNumber(string, number) {
  let str;
  if (string.length > number) {
    for (let i = 0; i < number; i += 1) {
      str = `${string.slice(0, number - 1)}…`;
    }
  }
  return str;
}
module.exports = compareStringAndNumber;

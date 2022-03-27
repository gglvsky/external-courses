function uppercaseInAllFirstSybmols(str) {
  const str1 = str.split(' ');
  for (let i = 0; i < str1.length; i += 1) {
    str1[i] = str1[i][0].toUpperCase();
  }
  return str1.join(' ');
}
module.exports = uppercaseInAllFirstSybmols;

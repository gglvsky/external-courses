/* function elemQuantityCount(str) {
  const obj = {};
  for (let i = 0; i < str.length; i += 1) {
    const key = str.charAt(i);
    if (key in obj) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  for (let prop in obj) {
    console.log(`${'элемент' + ' '}${prop} ` + 'встречается' + ` ${obj[prop]} ` + 'раза');
  }
  return obj;
}
module.exports = elemQuantityCount; */

const arrayElementsCount = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
  console.log('Всего элементов в массиве - ', arr.length);
};
module.exports = arrayElementsCount;

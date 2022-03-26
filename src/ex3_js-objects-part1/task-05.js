const objClone = (obj) => {
  const clonedObj = JSON.parse(JSON.stringify(obj));
  console.log(clonedObj);
};
module.exports = objClone;

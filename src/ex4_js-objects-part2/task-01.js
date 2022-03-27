const obj = Object.create({ string: 'qwerty' });
obj.number = 123;
const findInProto = (key, object) => {
  if (key in object && !object.hasOwnProperty(key)) {
    return object[key];
  }
  return undefined;
};
module.exports = findInProto;

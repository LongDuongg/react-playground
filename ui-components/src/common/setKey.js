
const setKey = (obj, key, value) => {
  return {
    ...obj,
    [key]: value
  }
}; 
exports.setKey = setKey;
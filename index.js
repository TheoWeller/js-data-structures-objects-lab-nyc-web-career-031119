// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let obj = {}
  obj[key] = value
  let newObj = Object.assign(driver, obj)
  return newObj;
}

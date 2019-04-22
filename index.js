// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let newObj = Object.assign(driver, { key : value })
  return newObj;
}

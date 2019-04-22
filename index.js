// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let obj = {}
  obj[key] = value
  let newObj = Object.assign({}, driver, obj)
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  let obj = {}
  obj[key] = value
  let newObj = Object.assign(driver, obj)
  return newObj;
}

function deleteFromDriverByKey(driver, key) {
  let newObj = Object.assign({}, driver)
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

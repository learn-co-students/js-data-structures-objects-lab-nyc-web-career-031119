// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key ,value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, whatever) {
  let obj = Object.assign({}, driver);
  delete obj[whatever];
  return obj;
}

function destructivelyDeleteFromDriverByKey(driver, whatever) {
  delete driver[whatever];
  return driver;
}

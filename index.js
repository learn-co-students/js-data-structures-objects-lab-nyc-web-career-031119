// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const updateDriver = Object.assign({}, driver, {[key]: value});
  return updateDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
};

function deleteFromDriverByKey(driver, key) {
  const deleteDriver = Object.assign({}, driver);
  delete deleteDriver[key];
  return deleteDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

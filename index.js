// Write your solution in this file!

let driver = {
  name: "mike",
  address: "Erbil",
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}
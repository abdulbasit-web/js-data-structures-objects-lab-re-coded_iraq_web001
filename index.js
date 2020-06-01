// Write your solution in this file!

let driver = {
  name: "mike",
  address: "Erbil",
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}
destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");


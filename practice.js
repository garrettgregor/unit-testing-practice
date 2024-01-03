function findRemainder(num1, num2) {
  var remainder = num1 % num2;
  return remainder
};

function startGPS(currentLocation, newLocation) {
  if (currentLocation != newLocation) {
    return `Taking you from ${currentLocation} to ${newLocation}!  Getting directions now!`
  } else {
    return `You are already at the ${newLocation}!  Would you like to go somewhere else?`
  }
}

module.exports = {
  findRemainder,
  startGPS,
  // createUser,
  // makePizza
}
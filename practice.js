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
};

function createUser(firstName, lastName, birthDate) {
  const user = { onlineStatus: false }; // can use const, var or let within brackets

  if (firstName && lastName) {
    user.firstName = firstName;
    user.lastName = lastName
  };

  if (birthDate) {
    user.birthDate = birthDate
  }

  return user
}

module.exports = {
  findRemainder,
  startGPS,
  createUser,
  // makePizza
}
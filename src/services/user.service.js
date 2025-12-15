const users = require("../data/users.store");

function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

function createUser(user) {
  users.push(user);
  return user;
}

module.exports = {
  findUserByEmail,
  createUser
};

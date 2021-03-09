const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = []

  if (!Array.isArray(members)) {
    return false
  }

  members.forEach(el => {
    if (typeof el === 'string') {
      res.push(el.trim().charAt(0).toUpperCase())
    }
  });

  if (!res.length) {
    return false
  }

  return res.sort().join('')
};

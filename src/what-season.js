const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {


  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error('THROWN')
  }

  let mounth = date.getMonth()

  if (mounth === 11 || mounth === 0 || mounth === 1) {
    return 'winter'
  } else if (mounth === 2 || mounth === 3 || mounth === 4) {
    return 'spring'
  } else if (mounth === 5 || mounth === 6 || mounth === 7) {
    return 'summer'
  } else {
    return 'autumn'
  }
};

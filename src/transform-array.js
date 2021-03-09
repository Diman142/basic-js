const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let res = [...arr]

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--discard-next') {
      if (res[i + 1] !== undefined) {

        if (res[i + 2] === '--discard-prev' || res[i + 2] === '--double-prev') {
          res.splice(i + 2, 1)
        }
        res.splice(i, 2)
        i--


      } else {
        res.splice(i, 1)

      }
    } else if (res[i] === '--discard-prev') {
      if (res[i - 1] !== undefined) {
        res.splice(i - 1, 2)
        i--
      } else {
        res.splice(i, 1)
      }
    } else if (res[i] === '--double-next') {
      if (res[i + 1] !== undefined) {
        res[i] = res[i + 1]

      } else {
        res.splice(i, 1)

      }
    } else if (res[i] === '--double-prev') {
      if (res[i - 1] !== undefined) {
        res[i] = res[i - 1]
      } else {
        res.splice(i, 1)
      }
    }
  }

  return res
};

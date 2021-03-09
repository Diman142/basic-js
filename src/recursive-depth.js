const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1
    let flag = false
    let t = []


    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        t = [...t, ...arr[i]]
        flag = true
      }
    }

    if (flag) {
      return count + this.calculateDepth(t)
    } else {
      return count
    }
  }
};


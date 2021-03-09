const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let counter = 0

  matrix.forEach(el => {

    el.forEach(item => {
      if (item == "^^") {
        counter++
      }
    })
  });

  return counter
};

const CustomError = require("../extensions/custom-error");


// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) 
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

module.exports = function repeater(str, options) {

  if (typeof str === 'object' && str !== null) {
    if (str[Symbol.toPrimitive]) {
      str = String(str) + String(str)
    }
    str = String(str)
  }

  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition)
  }

  options.separator = options.separator || '+'
  options.additionSeparator = options.additionSeparator || '|'

  let res = ''

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res = res + str
      if (options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j === options.additionRepeatTimes - 1) {
            res = res + options.addition
          } else {
            res = res + options.addition + options.additionSeparator
          }
        }
      }
      if (i !== options.repeatTimes - 1) {
        res = res + options.separator
      }

    }

    return res

  } else {
    return str + options.addition
  }

};

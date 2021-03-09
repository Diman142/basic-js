const CustomError = require("../extensions/custom-error");

const chainMaker = {

  resArr: [],

  getLength() {
    return this.resArr.length
  },
  addLink(value) {
    this.resArr.push(`( ${value} )~~`)
    return this
  },
  removeLink(position) {
    if (position - 1 < 0 || typeof position !== 'number') {
      this.resArr = []
      throw new Error('THROWN')
    }
    this.resArr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.resArr.reverse()
    return this
  },
  finishChain() {
    this.resArr[this.resArr.length - 1] = this.resArr[this.resArr.length - 1].slice(0, this.resArr[this.resArr.length - 1].length - 2)
    let resStr = this.resArr.join('')
    this.resArr = []
    return resStr
  }
};

module.exports = chainMaker;

const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }

  getNumber(symbol) {
    let t = symbol.toUpperCase()

    switch (t) {
      case 'A':
        return 0
      case 'B':
        return 1
      case 'C':
        return 2
      case 'D':
        return 3
      case 'E':
        return 4
      case 'F':
        return 5
      case 'G':
        return 6
      case 'H':
        return 7
      case 'I':
        return 8
      case 'J':
        return 9
      case 'K':
        return 10
      case 'L':
        return 11
      case 'M':
        return 12
      case 'N':
        return 13
      case 'O':
        return 14
      case 'P':
        return 15
      case 'Q':
        return 16
      case 'R':
        return 17
      case 'S':
        return 18
      case 'T':
        return 19
      case 'U':
        return 20
      case 'V':
        return 21
      case 'W':
        return 22
      case 'X':
        return 23
      case 'Y':
        return 24
      case 'Z':
        return 25
      default: return symbol
    }
  }

  getSymbol(number) {
    let t = number
    switch (t) {
      case 0:
        return 'A'
      case 1:
        return 'B'
      case 2:
        return 'C'
      case 3:
        return 'D'
      case 4:
        return 'E'
      case 5:
        return 'F'
      case 6:
        return 'G'
      case 7:
        return 'H'
      case 8:
        return 'I'
      case 9:
        return 'J'
      case 10:
        return 'K'
      case 11:
        return 'L'
      case 12:
        return 'M'
      case 13:
        return 'N'
      case 14:
        return 'O'
      case 15:
        return 'P'
      case 16:
        return 'Q'
      case 17:
        return 'R'
      case 18:
        return 'S'
      case 19:
        return 'T'
      case 20:
        return 'U'
      case 21:
        return 'V'
      case 22:
        return 'W'
      case 23:
        return 'X'
      case 24:
        return 'Y'
      case 25:
        return 'Z'
      default: return ""
    }
  }

  encrypt(message, key) {
    let keyCount = 0
    let messArr = []
    let keyArr = []
    let encryptArr = []

    for (let i = 0; i < message.length; i++) {

      if (message.charAt(i) !== this.getNumber(message.charAt(i))) {
        messArr.push(this.getNumber(message.charAt(i)))
        keyArr.push(this.getNumber(key.charAt(keyCount)))
      } else {
        messArr.push(message.charAt(i))
        keyArr.push(message.charAt(i))
        keyCount--
      }
      keyCount++
      if (keyCount >= key.length) {
        keyCount = 0
      }
    }

    for (let j = 0; j < messArr.length; j++) {
      if (this.getSymbol(messArr[j]) !== "") {
        let numb = (messArr[j] + keyArr[j]) % 26
        encryptArr.push(this.getSymbol(numb))
      } else {
        encryptArr.push(messArr[j])
      }
    }


    if (this.type) {
      return encryptArr.join('')
    } else {
      return encryptArr.reverse().join('')
    }

  }


  decrypt(encryptedMessage, key) {


    let keyCount = 0
    let encryptedMessageArr = []
    let keyArr = []
    let decryptedArr = []

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (encryptedMessage.charAt(i) !== this.getNumber(encryptedMessage.charAt(i))) {
        encryptedMessageArr.push(this.getNumber(encryptedMessage.charAt(i)))
        keyArr.push(this.getNumber(key.charAt(keyCount)))
      } else {
        encryptedMessageArr.push(encryptedMessage.charAt(i))
        keyArr.push(encryptedMessage.charAt(i))
        keyCount--
      }
      keyCount++
      if (keyCount >= key.length) {
        keyCount = 0
      }
    }

    for (let j = 0; j < encryptedMessageArr.length; j++) {
      if (this.getSymbol(encryptedMessageArr[j]) !== "") {
        let numb = encryptedMessageArr[j] - keyArr[j]
        if (numb < 0) {
          numb = (numb + 26) % 26
        }
        decryptedArr.push(this.getSymbol(numb))
      } else {
        decryptedArr.push(encryptedMessageArr[j])
      }
    }

    if (this.type) {
      return decryptedArr.join('')
    } else {
      return decryptedArr.reverse().join('')
    }


  }
}

module.exports = VigenereCipheringMachine;



const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (!sampleActivity || !parseInt(sampleActivity, 10) || typeof sampleActivity !== 'string' || sampleActivity > 15 || sampleActivity <= 0) {
    return false
  }

  return Math.ceil(((Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693))
};


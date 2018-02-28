module.exports = class {
  static getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }
}
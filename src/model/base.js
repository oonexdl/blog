module.exports = class extends think.Model {
  getOneById(id) {
    return this.where({ id: id}).find();
  }
}
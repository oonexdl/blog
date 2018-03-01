module.exports = class extends think.Model {
  getOneById(id) {
    return this.where({ id: id}).find();
  }

  deleteAll() {
    return this.execute(`delete from ${this.modelName} where id>0;`);
  }
}
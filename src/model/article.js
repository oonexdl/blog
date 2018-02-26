const moment = require('moment');

module.exports = class extends think.Model {
  async getList(page) {
    const pageSize = 20;
    const offset = (page - 1) * pageSize;
    const items = await this.limit(offset, pageSize).select();
    for(let item of items) {
      item.date = moment(item.date).format('YYYY-MM-DD');
    }

    return items;
  }

  getOneById(id) {
    return this.where({ id: id}).find();
  }
}
const Base = require('./base.js');
const moment = require('moment');

module.exports = class extends Base {
  async getList(page) {
    const pageSize = 20;
    const offset = (page - 1) * pageSize;
    const items = await this.limit(offset, pageSize).select();
    for(let item of items) {
      item.date = moment(item.date).format('YYYY-MM-DD');
    }

    return items;
  }
}
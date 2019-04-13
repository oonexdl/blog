const moment = require('moment');

const Base = require('./base.js');
const math = require('../utils/math.js');

module.exports = class extends Base {
  async getList(page) {
    const pageSize = 20;
    const offset = (page - 1) * pageSize;
    const items = await this.limit(offset, pageSize).select();
    for(let item of items) {
      // TODO: use https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_date-format
      item.date = moment(item.date).format('YYYY-MM-DD');
    }

    return items;
  }

  async getTags() {
    const items = await this.distinct('tags').select();
    if (think.isEmpty(items)) {
        return [];
    }

    let tags = JSON.parse(items[0].tags);
    items.shift();
    for(let item of items) {
        let tagArray = JSON.parse(item.tags);
        for(let tag of tagArray) {
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        }
    }

    return tags;
  }

  getListByTag(tag) {
    return this.query(`select id,title,DATE_FORMAT(date, \'%Y-%m-%d\') as date from article where JSON_CONTAINS(tags, '["${tag}"]')=1;`);
  }

  getListByCategory(category) {
    return this.query(`select id,title,DATE_FORMAT(date, \'%Y-%m-%d\') as date from article where category=${category};`);
  }
}
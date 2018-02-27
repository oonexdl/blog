const Base = require('./base.js');
const moment = require('moment');

module.exports = class extends think.Model {
  async getList(id) {
    const items = await this.query('SELECT category.name as category, JSON_ARRAYAGG(JSON_OBJECT("id", article.id, "title", article.title, "date", article.date)) as articles FROM article LEFT JOIN (category) ON (category.id = article.category) group by category;');
    for(let item of items) {
      item.articles = JSON.parse(item.articles);
      for(let article of item.articles) {
        article.date = moment(article.date).format('YYYY-MM-DD');
      }
    }

    return items;
  }
}
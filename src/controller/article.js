const Base = require('./base.js');
const moment = require('moment');
const showdown = require('showdown');

module.exports = class extends Base {
  async viewAction() {
    const article = think.model('article');
    const item = await article.getOneById(this.get('id'));
    if (think.isEmpty(item)) {
        this.ctx.throw(404);
    }

    item.date = moment(item.date).format('YYYY-MM-DD');

    const converter = new showdown.Converter();
    item.text = converter.makeHtml(item.text);
    this.assign('item', item);
    return this.display();
  }
};

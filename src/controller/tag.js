const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const article = think.model('article');
    const tags = await article.getTags();
    this.assign('items', tags);

    return this.display();
  }

  async viewAction() {
    const article = think.model('article');
    const tag = this.get('name');
    let articles = await article.getListByTag(tag);
    if (think.isEmpty(articles)) {
      this.throw(404);
    }

    let item = {
      tag: tag,
      articles: articles
    };
    this.assign('item', item);

    return this.display();
  }
};

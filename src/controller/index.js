const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const article = think.model('article');
    const page = this.get('page') || 1;
    const items = await article.getList(page);
    this.assign({
      items: items,
      nextPage: parseInt(page) + 1
    });
    return this.display();
  }

  viewAction() {
    return this.sucess();
  }
};

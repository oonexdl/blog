const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const category = think.model('category');
    const items = await category.getList(this.get('id'));
    this.assign('items', items);
    return this.display();
  }

  async viewAction() {
    const categoryId = this.get('id');
    const category = await think.model('category').getOneById(categoryId);
    if (think.isEmpty(category)) {
      this.throw(404);
    }

    const article = think.model('article');
    const articles = await article.getListByCategory(categoryId);
    if (think.isEmpty(articles)) {
      this.throw(404);
    }

    let item = {
      id: category.id,
      name: category.name,
      articles: articles
    };
    this.assign('item', item);

    return this.display();
  }
};

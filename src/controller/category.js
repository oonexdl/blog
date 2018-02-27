const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const category = think.model('category');
    const items = await category.getList(this.get('id'));
    this.assign('items', items);
    return this.display();
  }
};

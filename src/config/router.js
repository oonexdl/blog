module.exports = [
  ['/article/page/:page', 'index', 'get'],
  ['/article/:id', 'article/view', 'get'],
  ['/about', 'author', 'get']
];

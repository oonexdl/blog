module.exports = [
  ['/article/page/:page', 'index', 'get'],
  ['/article/:id', 'article/view', 'get'],

  ['/categories', 'category', 'get'],
  ['/category/:id', 'category/view', 'get'],

  ['/tags', 'tag', 'get'],
  ['/tag/:name', 'tag/view', 'get'],

  ['/about', 'author', 'get']
];

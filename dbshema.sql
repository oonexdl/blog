create table article(
  id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(60) NOT NULL,
  date DATETIME NOT NULL,
  text TEXT CHARACTER SET utf8,
  author VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
);
insert into article(id, title, date)values(NULL, "use python handle HTML 5 ways", "2017-12-26");

ALTER TABLE article ADD COLUMN text TEXT CHARACTER SET utf8;
alter table article add column author varchar(20) not null;

update article set author='seasons521' where id>0;
update article set text='龟叔发明了 Python，然后集成了一堆概念在这门语言里面，比如：迭代器，装饰器，函数，生成器，类，对象，协程等等。这些概念对初学者似乎没一个好懂的，不过还有比这更难的概念，它是 Python 世界中的造物主，虽然我们很少去直接使用它，但天天都在用，它就是今天的主角------元类。' where id>0;
CREATE DATABASE blog;

USE `blog`;

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `date` datetime NOT NULL,
  `text` text CHARACTER SET utf8,
  `author` varchar(20) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4;

-- USE `mysql`;

-- password func is deprecated in mysql 8.0
-- UPDATE user set authentication_string=password('abc123_'), plugin='mysql_native_password' where User='root';

/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : shares

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-06-26 16:24:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `contect`
-- ----------------------------
DROP TABLE IF EXISTS `contect`;
CREATE TABLE `contect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(48) DEFAULT NULL,
  `phone` varchar(16) NOT NULL,
  `ip` varchar(36) NOT NULL,
  `time` int(10) NOT NULL,
  `c` varchar(16) DEFAULT NULL,
  `stock_code` varchar(32) DEFAULT NULL,
  `form_position` varchar(16) DEFAULT NULL,
  `reservel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contect
-- ----------------------------
INSERT INTO `contect` VALUES ('19', null, '16675580215', '127.0.0.1', '1530001305', '', '000002', 'up', null);
INSERT INTO `contect` VALUES ('20', null, '18245124512', '127.0.0.1', '1530001323', '', '000002', 'down', null);

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(128) NOT NULL,
  `create_time` int(10) NOT NULL,
  `update_time` int(10) DEFAULT NULL,
  `login_time` int(10) DEFAULT NULL,
  `ip` varchar(48) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '$2y$10$BMX/JDTSpXLSHZ/kjUjSmu3JyepTKS4UrTQIGD8NG0Qur.MaZQakC', '1500190776', '1505488344', '1530001422', '127.0.0.1', '1');

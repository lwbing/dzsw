CREATE TABLE `tv_category` (
  `ids` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(70) DEFAULT NULL,
  `topic` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `icon` varchar(120) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ids`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_order` (
  `order_code` varchar(40) NOT NULL,
  `product_name` varchar(150) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `num` int(11) DEFAULT NULL,
  `custorm_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `money` float DEFAULT NULL,
  `qcode` varchar(20) DEFAULT NULL,
  `is_validate` smallint(6) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`order_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `catgelory` int(11) DEFAULT NULL,
  `yprice` decimal(10,2) DEFAULT NULL,
  `nprice` decimal(10,2) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `seller_num` int(11) DEFAULT NULL,
  `custorm_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `descrpt` text,
  `notice` text,
  `data` varchar(255) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `tv_seller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `head_img` varchar(150) DEFAULT NULL,
  `seller_name` varchar(70) DEFAULT NULL,
  `login_name` varchar(30) DEFAULT NULL,
  `pwd` varchar(40) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `enable` smallint(6) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(120) DEFAULT NULL,
  `logo` varchar(150) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `seller_name` varchar(80) DEFAULT NULL,
  `level` smallint(6) DEFAULT NULL,
  `shop_type` smallint(6) DEFAULT NULL,
  `enable` smallint(6) DEFAULT NULL,
  `sorts` smallint(6) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_shoping_car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(80) DEFAULT NULL,
  `product_id` int(11) DEFAULT '0',
  `num` int(11) DEFAULT '0',
  `product_img` varchar(150) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `user_id` int(11) DEFAULT '0',
  `status` smallint(6) DEFAULT '0',
  `custorm_id` int(11) DEFAULT NULL,
  `remark` text,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_traderecord` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_code` varchar(32) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `trancen_id` varchar(35) DEFAULT NULL,
  `cash` decimal(10,0) DEFAULT NULL,
  `trade_type` smallint(6) DEFAULT NULL,
  `returnInfo` text,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `tv_userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(40) NOT NULL,
  `pass_word` varchar(60) DEFAULT NULL,
  `nick_name` varchar(30) DEFAULT NULL,
  `real_name` varchar(30) DEFAULT NULL,
  `head_img` varchar(150) DEFAULT NULL,
  `birthday` varchar(30) DEFAULT NULL,
  `eamil` varchar(40) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `dept_id` int(11) DEFAULT '0',
  `sex` varchar(4) DEFAULT NULL,
  `user_type` smallint(6) DEFAULT NULL,
  `open_id` varchar(50) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `lgname` (`user_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_distributor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `rate` int(11) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_recycle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT '0',
  `flag` int(11) DEFAULT '0',
  `cxt` text,
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tv_shareinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `dis_id` int(11) DEFAULT '0',
  `product_id` int(11) DEFAULT '0',
  `create_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
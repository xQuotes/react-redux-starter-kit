DROP TABLE IF EXISTS `SwitchServer`;
CREATE TABLE `SwitchServer` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `ser_no` varchar(50) NOT NULL DEFAULT '' COMMENT 'SN号',
  `hostname` varchar(50) NOT NULL DEFAULT '' COMMENT '主机名',
  `ext_ip` varchar(20) NOT NULL DEFAULT '' COMMENT '公网IP',
  `int_ip` varchar(20) NOT NULL DEFAULT '' COMMENT '内网IP',
  `man_card_ip` varchar(20) NOT NULL DEFAULT '' COMMENT '管理卡IP',
  `brand` varchar(50) NOT NULL DEFAULT '' COMMENT '服务器品牌',
  
  `category` varchar(50) NOT NULL DEFAULT '' COMMENT '服务器类型',
  `datacenter` varchar(50) NOT NULL DEFAULT '' COMMENT '所属机房',
  `area` varchar(50) NOT NULL DEFAULT '' COMMENT '所属区域',
  `cabinet` varchar(50) NOT NULL DEFAULT '' COMMENT '所属机柜',
  `u_loc` varchar(50) NOT NULL DEFAULT '' COMMENT 'U位',
  `acc_man` varchar(50) NOT NULL DEFAULT '' COMMENT '大客户经理',
  `fix_phone` varchar(50) NOT NULL DEFAULT '' COMMENT '保修电话',
  `remark` varchar(50) NOT NULL DEFAULT '' COMMENT '备注',
  `user` varchar(50) NOT NULL DEFAULT '' COMMENT '最后修改人',
  `c_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `u_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8  COMMENT='服务器';
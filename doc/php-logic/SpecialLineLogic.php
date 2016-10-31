<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\SpecialLineModel as SpecialLine;

/**
 *
 */
class SpecialLineLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array(
    );

    //不能为空的字段
    public static $not_empty_fields = array(
        'supplier',
        'short_tag',
        'broadband'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'supplier'=>'供应商',
        'short_tag'=>'专线缩写',
        'broadband'=>'宽带',
        'area'=>'区域名称',
        'a_name'=>'甲方名称',
        'b_name'=>'乙方名称',
        'acc_man'=>'大客户经理',
        'acc_man_phone'=>'大客户经理电话',
        'datacenter'=>'所属机房',
        'ext_ip'=>'公网IP',
        'mask'=>'子网掩码',
        'gateway'=>'公网网关',
        'is_inter_ip'=>'是否为互联IP',
        'gat_net_equipment'=>'网关所在网络设备',
        'remark'=>'备注'
    );

    //搜索的条件
    public static $search_fields = array(
        'supplier'=>'供应商',
        'short_tag'=>'专线缩写',
        'broadband'=>'宽带',
        'datacenter'=>'所属机房',
        'ext_ip'=>'公网IP',
        'mask'=>'子网掩码',
        'gateway'=>'公网网关'
    );

    //可修改的字段
    public static $update_fields = array(
        'supplier'=>'供应商',
        'short_tag'=>'专线缩写',
        'broadband'=>'宽带',
        'area'=>'区域名称',
        'a_name'=>'甲方名称',
        'b_name'=>'乙方名称',
        'acc_man'=>'大客户经理',
        'acc_man_phone'=>'大客户经理电话',
        'datacenter'=>'所属机房',
        'ext_ip'=>'公网IP',
        'mask'=>'子网掩码',
        'gateway'=>'公网网关',
        'is_inter_ip'=>'是否为互联IP',
        'gat_net_equipment'=>'网关所在网络设备',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = SpecialLine::getInstance()->getList($query);
        $res = $data;
        return $res;
    }

    /**
     * 获取单条
     * @param $query array
     * @return array
     */
    public function getInfo($query = array()) {
        $query = array_filter($query);
        $res = array();
        $data = SpecialLine::getInstance()->getInfo($query);
        if(!empty($data)) {
            $res = $data;
        }
        return $res;
    }

    /**
     * 添加单条
     * @param $data array
     * @param $return_type 'last_insert_id' 'last_insert_data'
     * @return array
     */
    public function addInfo($data, $return_type = null) {
        $res = array();
        $res =  SpecialLine::getInstance()->addInfo($data, $return_type);
        return $res;
    }

    /**
     * 添加多条
     * @param $data array
     * @param $return_type 'last_insert_id' 'last_insert_data'
     * @return array
     */
    public function addList($data, $return_type = null) {
        $res = array();
        $res =  SpecialLine::getInstance()->addList($data, $return_type);
        return $res;
    }

    /**
     * 更新映射信息
     * @param $set array 更新内容
     * @param $where array 条件
     * @return array
     */
    public function updateInfo($set, $where, $return_type = null) {
        $res = array();
        $res =  SpecialLine::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  SpecialLine::getInstance()->deleteInfo($where);
        return $res;
    }


    /**
     * 销毁类实例
     */
    function __destruct()
    {
    }

    /**
     * 单例模式
     * @var \Mysql\Sw\SpecialLineModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

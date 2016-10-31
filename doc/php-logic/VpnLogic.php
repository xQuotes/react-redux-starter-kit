<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\VPNModel as VPN;

/**
 *
 */
class VPNLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array();

    //不能为空的字段
    public static $not_empty_fields = array(
        'a_datacenter',
        'b_datacenter',
        'vpn_type',
        'a_intet_addr',
        'b_intet_addr'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'a_datacenter'=>'A端机房',
        'b_datacenter'=>'B端机房',
        'vpn_type'=>'vpn类型',
        'a_intet_addr'=>'A端互联地址',
        'b_intet_addr'=>'B端互联地址',
        'remark'=>'备注'
    );

    //搜索的条件
    public static $search_fields = array(
        'a_datacenter'=>'A端机房',
        'b_datacenter'=>'B端机房',
        'vpn_type'=>'vpn类型',
        'a_intet_addr'=>'A端互联地址',
        'b_intet_addr'=>'B端互联地址'
    );

    //可修改的字段
    public static $update_fields = array(
        'a_datacenter'=>'A端机房',
        'b_datacenter'=>'B端机房',
        'vpn_type'=>'vpn类型',
        'a_intet_addr'=>'A端互联地址',
        'b_intet_addr'=>'B端互联地址',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = VPN::getInstance()->getList($query);
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
        $data = VPN::getInstance()->getInfo($query);
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
        $res =  VPN::getInstance()->addInfo($data, $return_type);
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
        $res =  VPN::getInstance()->addList($data, $return_type);
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
        $res =  VPN::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  VPN::getInstance()->deleteInfo($where);
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
     * @var \Mysql\Sw\VPNModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

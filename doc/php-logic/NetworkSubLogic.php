<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\NetworkSubModel as NetworkSub;

/**
 *
 */
class NetworkSubLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array(
    );

    //不能为空的字段
    public static $not_empty_fields = array(
        'vlan',
        'ext_portip',
        'mask',
        'gateway',
        'a_port_info',
        'b_port_info',
        'is_ospf',
        'equipment'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'vlan'=>'VLAN',
        'port'=>'端口',
        'mask'=>'子网掩码',
        'gateway'=>'网关',
        'a_port_info'=>'A端信息',
        'b_port_info'=>'B端信息',
        'is_ospf'=>'是否ospf',
        'equipment'=>'所属设备',
        'remark'=>'备注'
    );

    //搜索的条件
    public static $search_fields = array(
        'vlan'=>'VLAN',
        'port'=>'端口',
        'mask'=>'子网掩码',
        'gateway'=>'网关',
        'a_port_info'=>'A端信息',
        'b_port_info'=>'B端信息',
        'is_ospf'=>'是否ospf',
        'equipment'=>'所属设备'
    );

    //可修改的字段
    public static $update_fields = array(
        'vlan'=>'VLAN',
        'port'=>'端口',
        'mask'=>'子网掩码',
        'gateway'=>'网关',
        'a_port_info'=>'A端信息',
        'b_port_info'=>'B端信息',
        'is_ospf'=>'是否ospf',
        'equipment'=>'所属设备',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = NetworkSub::getInstance()->getList($query);
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
        $data = NetworkSub::getInstance()->getInfo($query);
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
        $res =  NetworkSub::getInstance()->addInfo($data, $return_type);
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
        $res =  NetworkSub::getInstance()->addList($data, $return_type);
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
        $res =  NetworkSub::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  NetworkSub::getInstance()->deleteInfo($where);
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
     * @var \Mysql\Sw\NetworkSubModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

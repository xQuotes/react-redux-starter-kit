<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\NetworkSecModel as NetworkSec;

/**
 *
 */
class NetworkSecLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array(
    );

    //不能为空的字段
    public static $not_empty_fields = array(
        'acl_no',
        'dep_locate',
        'dep_purpose',
        'equipment'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'acl_no'=>'ACL编号',
        'dep_locate'=>'部署位置',
        'dep_purpose'=>'部署目的',
        'equipment'=>'所属设备',
        'remark'=>'备注'
    );

    //搜索的条件
    public static $search_fields = array(
        'acl_no'=>'ACL编号',
        'dep_locate'=>'部署位置',
        'dep_purpose'=>'部署目的',
        'equipment'=>'所属设备'
    );

    //可修改的字段
    public static $update_fields = array(
        'acl_no'=>'ACL编号',
        'dep_locate'=>'部署位置',
        'dep_purpose'=>'部署目的',
        'equipment'=>'所属设备',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = NetworkSec::getInstance()->getList($query);
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
        $data = NetworkSec::getInstance()->getInfo($query);
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
        $res =  NetworkSec::getInstance()->addInfo($data, $return_type);
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
        $res =  NetworkSec::getInstance()->addList($data, $return_type);
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
        $res =  NetworkSec::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  NetworkSec::getInstance()->deleteInfo($where);
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
     * @var \Mysql\Sw\NetworkSecModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\WirelessModel as Wireless;

/**
 *
 */
class WirelessLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array(
    );

    //不能为空的字段
    public static $not_empty_fields = array(
        'signal',
        'auth_mode',
        'password',
        'sec_plo',
        'broadband',
        'equipment',
        'is_hidden'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'signal'=>'无线信号',
        'auth_mode'=>'认证方式',
        'password'=>'密码',
        'sec_plo'=>'安全策略',
        'broadband'=>'限速宽带',
        'equipment'=>'所在设备',
        'is_hidden'=>'是否隐藏',
        'remark'=>'备注'
    );

    //搜索的条件
    public static $search_fields = array(
        'signal'=>'无线信号',
        'auth_mode'=>'认证方式',
        'password'=>'密码',
        'sec_plo'=>'安全策略',
        'broadband'=>'限速宽带',
        'equipment'=>'所在设备'
    );

    //可修改的字段
    public static $update_fields = array(
        'signal'=>'无线信号',
        'auth_mode'=>'认证方式',
        'password'=>'密码',
        'sec_plo'=>'安全策略',
        'broadband'=>'限速宽带',
        'equipment'=>'所在设备',
        'is_hidden'=>'是否隐藏',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = Wireless::getInstance()->getList($query);
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
        $data = Wireless::getInstance()->getInfo($query);
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
        $res =  Wireless::getInstance()->addInfo($data, $return_type);
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
        $res =  Wireless::getInstance()->addList($data, $return_type);
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
        $res =  Wireless::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  Wireless::getInstance()->deleteInfo($where);
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
     * @var \Mysql\Sw\WirelessModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

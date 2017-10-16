<?php

namespace Business\Config;
use \Tools\Tools;
use \Mysql\Sw\NetworkEquipmentModel as NetworkEquipment;

/**
 *
 */
class NetworkEquipmentLogicModel extends \Business\Config\AbstractModel {

    //验证的规则和字段
    public static $validate_list = array(
    );

    //不能为空的字段
    public static $not_empty_fields = array(
        'equ_name',
        'equ_ip',
        'ser_no',
        'area',
        'datacenter',
        'cabinet',
        'model',
        'brand',
        'category',
        'cpu_nums'
    );

    //csv表头
    public static $fields_array = array(
        'id' => 'ID',
        'equ_name'=>'设备名称',
        'equ_ip'=>'设备IP',
        'ser_no'=>'SN号',
        'area'=>'所属区域',
        'datacenter'=>'所属机房',
        'cabinet'=>'所属机柜',
        'model'=>'设备型号',
        'brand'=>'设备品牌',
        'category'=>'设备类型',
        'cpu_nums'=>'CPU数',
        'remark'=>'备注',
    );

    //搜索的条件
    public static $search_fields = array(
        'equ_name'=>'设备名称',
        'equ_ip'=>'设备IP',
        'ser_no'=>'SN号'
    );

    //可修改的字段
    public static $update_fields = array(
        'equ_name'=>'设备名称',
        'equ_ip'=>'设备IP',
        'ser_no'=>'SN号',
        'area'=>'所属区域',
        'datacenter'=>'所属机房',
        'cabinet'=>'所属机柜',
        'model'=>'设备型号',
        'brand'=>'设备品牌',
        'category'=>'设备类型',
        'cpu_nums'=>'CPU数',
        'remark'=>'备注'
    );



    public function getList($query = array())
    {
        $query = array_filter($query);
        $res = array();
        $data = NetworkEquipment::getInstance()->getList($query);
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
        $data = NetworkEquipment::getInstance()->getInfo($query);
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
        $res =  NetworkEquipment::getInstance()->addInfo($data, $return_type);
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
        $res =  NetworkEquipment::getInstance()->addList($data, $return_type);
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
        $res =  NetworkEquipment::getInstance()->updateInfo($set, $where, $return_type);
        return $res;
    }

    /**
     * 删除
     * @param $where array
     * @return array
     */
    public function deleteInfo($where) {
        $res =  NetworkEquipment::getInstance()->deleteInfo($where);
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
     * @var \Mysql\Sw\NetworkEquipmentModel
     */
    private static $_instance = null;

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}

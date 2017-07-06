export default {
//不能为空的字段
    not_empty_fields: {
        "ext_ip": true,
        "ext_port": true,
        "int_ip": true,
        "int_port": true,
        "applicant": true,
        "equipment": true,
        "deadline": true,
    },

    //csv表头
    fields_array: {
        "id": "ID",
        "ext_ip": "公网IP",
        "ext_port": "公网端口",
        "int_ip": "内网IP",
        "int_port": "内网端口",
        "applicant": "申请人",
        "equipment": "所属设备",
        "deadline": "截止日期",
        "remark": "备注"
    },

    //搜索的条件
    search_fields: {
        "ext_ip": "公网IP",
        "ext_port": "公网端口",
        "int_ip": "内网IP",
        "int_port": "内网端口",
        "applicant": "申请人",
        "equipment": "所属设备",
        "deadline": "截止日期"
    },

    //可修改的字段
    update_fields: {
        "ext_ip": "公网IP",
        "ext_port": "公网端口",
        "int_ip": "内网IP",
        "int_port": "内网端口",
        "applicant": "申请人",
        "equipment": "所属设备",
        "deadline": "截止日期",
        "remark": "备注"
    },
}
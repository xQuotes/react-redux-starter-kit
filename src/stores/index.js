module.exports = {
  userStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),
  permissionStore: require('../route/permission/store')['default'].fromJS(),

  logStore: require('../route/cmdb/log/store')['default'].fromJS(),
  permissionStore: require('../route/cmdb/permission/store')['default'].fromJS(),
  tableStore: require('../route/cmdb/table/store')['default'].fromJS(),
  /*file_append*/

}
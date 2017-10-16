module.exports = {
  myStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),

  tableStore: require('../route/admin/table/store')['default'].fromJS(),
  userStore: require('../route/admin/user/store')['default'].fromJS(),
  newsStore: require('../route/admin/news/store')['default'].fromJS(),
  /*file_append*/

  permissionStore: require('../route/permission/store')['default'].fromJS()
}

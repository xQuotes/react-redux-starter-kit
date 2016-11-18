module.exports = {
  userStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),
  permissionStore: require('../route/permission/store')['default'].fromJS(),

  /*file_append*/

}
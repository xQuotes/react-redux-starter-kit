module.exports = {
  userStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),
  
  backupStore: require('../route/switches/backup/store')['default'].fromJS(),
  vlanStore: require('../route/switches/vlan/store')['default'].fromJS(),
  mappingStore: require('../route/switches/mapping/store')['default'].fromJS(),
  serverStore: require('../route/switches/server/store')['default'].fromJS(),
  networksubStore: require('../route/switches/networksub/store')['default'].fromJS(),

  permissionStore: require('../route/permission/store')['default'].fromJS()
}
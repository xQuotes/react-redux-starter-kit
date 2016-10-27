module.exports = {
  userStore: require('./UserStore')['default'].fromJS(),
  dashboardStore: require('./DashboardStore')['default'].fromJS(),
  backupStore: require('./BackupStore')['default'].fromJS(),
  vlanStore: require('./VlanStore')['default'].fromJS()
}
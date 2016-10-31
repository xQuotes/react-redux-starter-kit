module.exports = {
  userStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),
  
  backupStore: require('../route/switches/backup/store')['default'].fromJS(),
  vlanStore: require('../route/switches/vlan/store')['default'].fromJS(),
  
  mappingStore: require('../route/switches/mapping/store')['default'].fromJS(),
  serverStore: require('../route/switches/server/store')['default'].fromJS(),
  networksubStore: require('../route/switches/networksub/store')['default'].fromJS(),
  networksecStore: require('../route/switches/networksec/store')['default'].fromJS(),
  dnetStore: require('../route/switches/dnet/store')['default'].fromJS(),
  snetStore: require('../route/switches/snet/store')['default'].fromJS(),
  vpnStore: require('../route/switches/vpn/store')['default'].fromJS(),
  wirelessStore: require('../route/switches/wireless/store')['default'].fromJS(),
  datacenterStore: require('../route/switches/datacenter/store')['default'].fromJS(),
  speciallineStore: require('../route/switches/specialline/store')['default'].fromJS(),
  networkequipmentStore: require('../route/switches/networkequipment/store')['default'].fromJS(),


  networkStore: require('../route/switches/network/store')['default'].fromJS(),
  actiontypeStore: require('../route/switches/actiontype/store')['default'].fromJS(),

  permissionStore: require('../route/permission/store')['default'].fromJS()
}
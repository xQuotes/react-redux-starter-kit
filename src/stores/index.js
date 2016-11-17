module.exports = {
  userStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),
  permissionStore: require('../route/permission/store')['default'].fromJS(),

  tableStore: require('../route/cmdb/table/store')['default'].fromJS(),
  dbStore: require('../route/cmdb/db/store')['default'].fromJS(),
  mulsearchStore: require('../route/cmdb/mulsearch/store')['default'].fromJS(),
  quicksearchStore: require('../route/cmdb/quicksearch/store')['default'].fromJS(),
  mysettingStore: require('../route/cmdb/mysetting/store')['default'].fromJS(),
  ipmanageStore: require('../route/cmdb/ipmanage/store')['default'].fromJS(),
  networkmanageStore: require('../route/cmdb/networkmanage/store')['default'].fromJS(),
  connectionStore: require('../route/cmdb/connection/store')['default'].fromJS(),
  idcmessageStore: require('../route/cmdb/idcmessage/store')['default'].fromJS(),
  cabinetmessageStore: require('../route/cmdb/cabinetmessage/store')['default'].fromJS(),
  spaceshowStore: require('../route/cmdb/spaceshow/store')['default'].fromJS(),
  productionStore: require('../route/cmdb/production/store')['default'].fromJS(),
  devicuseStore: require('../route/cmdb/devicuse/store')['default'].fromJS(),
  servermessageStore: require('../route/cmdb/servermessage/store')['default'].fromJS(),
  applymessageStore: require('../route/cmdb/applymessage/store')['default'].fromJS(),
  softwarepackageStore: require('../route/cmdb/softwarepackage/store')['default'].fromJS(),
  authsearchStore: require('../route/cmdb/authsearch/store')['default'].fromJS(),
  instructionStore: require('../route/cmdb/instruction/store')['default'].fromJS(),
  /*file_append*/

}
module.exports = {
  myStore: require('../route/login/store')['default'].fromJS(),
  dashboardStore: require('../route/dashboard/store')['default'].fromJS(),

  caculatorStore: require('../route/admin/caculator/store')['default'].fromJS(),
  tableStore: require('../route/admin/table/store')['default'].fromJS(),
  projectStore: require('../route/admin/cacuitem/store')['default'].fromJS(),
  //CoreTableStore
  coreTableStore: require('../route/admin/core/store')['default'].fromJS(),
  presetStore: require('../route/admin/table/PresetStore')['default'].fromJS(),
  formulaStore: require('../route/admin/formula/store')['default'].fromJS(),
  userStore: require('../route/admin/user/store')['default'].fromJS(),
  guidedataStore: require('../route/admin/guidedata/store')['default'].fromJS(),
  guideStore: require('../route/admin/guide/store')['default'].fromJS(),
  newsStore: require('../route/admin/news/store')['default'].fromJS(),
  toolStore: require('../route/admin/tools/store')['default'].fromJS(),
  biddingStore: require('../route/admin/bidding/store')['default'].fromJS(),
  mapdataStore: require('../route/admin/mapdata/store')['default'].fromJS(),
  QAStore: require('../route/admin/qa/store')['default'].fromJS(),
  /*file_append*/

  permissionStore: require('../route/permission/store')['default'].fromJS()
}

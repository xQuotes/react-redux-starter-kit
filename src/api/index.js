const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,
  getBackups: `${url}/sw_control/getbackupList`,
  getBackup: `${url}/sw_control/getBackupInfo`,
  getActions: `${url}/sw_admin/getActionTypeList`,
  addActions: `${url}/sw_admin/addActionType`,
  delActions: `${url}/sw_admin/deleteActionType`,
  checkAction: `${url}/sw_admin/checkAction`,
  updateActionType: `${url}/sw_admin/updateActionType`,

  addNetwork: `${url}/sw_admin/addNetwork`,  //网段查询接口  post 参数 network 支持模糊查询
  getNetworks: `${url}/sw_admin/getNetworkList`,  //网段查询接口  post 参数 network 支持模糊查询
  getNetwork: `${url}/sw_admin/getNetworkInfo`,
  deleteNetwork: `${url}/sw_admin/deleteNetwork`, //删除网段接口 post 参数 id
  updateNetwork: `${url}/sw_admin/updateNetwork`, //更新网段接口 post 参数id network type
  checkNetworkExist: `${url}/sw_admin/checkNetworkExist`, //查询网段知否存在 post 参数 network
  checkNetworkError: `${url}/sw_admin/checkNetworkError`, //检测网段是否正确  post 参数 network
  changeNetworkStatus: `${url}/sw_admin/setNetworkStatus`, 

  postMapping: `${url}/sw_config_mapping/addInfo`,
  getMappings: `${url}/sw_config_mapping/getList`,
  getMapping: `${url}/sw_config_mapping/getInfo`,
  deleteMapping: `${url}/sw_config_mapping/deleteInfo`,
  putMapping: `${url}/sw_config_mapping/updateInfo`,

  uploadCsvFile: `${url}/sw_config_upload/uploadAndCheckCsvFile`,
  uploadCsvData: `${url}/sw_config_upload/uploadCsvData`,

  getVlans: `${url}/sw_control/getVlanList`
}

export default Api

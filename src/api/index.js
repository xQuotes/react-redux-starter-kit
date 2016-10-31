const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,
  getBackups: `${url}/sw_control/getbackupList`,
  getBackup: `${url}/sw_control/getBackupInfo`,

  getVlans: `${url}/sw_control/getVlanList`,

  postMapping: `${url}/sw_config_mapping/addInfo`,
  getMappings: `${url}/sw_config_mapping/getList`,
  getMapping: `${url}/sw_config_mapping/getInfo`,
  deleteMapping: `${url}/sw_config_mapping/deleteInfo`,
  putMapping: `${url}/sw_config_mapping/updateInfo`,

  postServer: `${url}/sw_config_server/addInfo`,
  getServers: `${url}/sw_config_server/getList`,
  getServer: `${url}/sw_config_server/getInfo`,
  deleteServer: `${url}/sw_config_server/deleteInfo`,
  putServer: `${url}/sw_config_server/updateInfo`,

  postNetworksub: `${url}/sw_config_networksub/addInfo`,
  getNetworksubs: `${url}/sw_config_networksub/getList`,
  getNetworksub: `${url}/sw_config_networksub/getInfo`,
  deleteNetworksub: `${url}/sw_config_networksub/deleteInfo`,
  putNetworksub: `${url}/sw_config_networksub/updateInfo`,

  postNetworksec: `${url}/sw_config_networksec/addInfo`,
  getNetworksecs: `${url}/sw_config_networksec/getList`,
  getNetworksec: `${url}/sw_config_networksec/getInfo`,
  deleteNetworksec: `${url}/sw_config_networksec/deleteInfo`,
  putNetworksec: `${url}/sw_config_networksec/updateInfo`,

  postDnet: `${url}/sw_config_dnet/addInfo`,
  getDnets: `${url}/sw_config_dnet/getList`,
  getDnet: `${url}/sw_config_dnet/getInfo`,
  deleteDnet: `${url}/sw_config_dnet/deleteInfo`,
  putDnet: `${url}/sw_config_dnet/updateInfo`,

  postSnet: `${url}/sw_config_snet/addInfo`,
  getSnets: `${url}/sw_config_snet/getList`,
  getSnet: `${url}/sw_config_snet/getInfo`,
  deleteSnet: `${url}/sw_config_snet/deleteInfo`,
  putSnet: `${url}/sw_config_snet/updateInfo`,

  postVpn: `${url}/sw_config_vpn/addInfo`,
  getVpns: `${url}/sw_config_vpn/getList`,
  getVpn: `${url}/sw_config_vpn/getInfo`,
  deleteVpn: `${url}/sw_config_vpn/deleteInfo`,
  putVpn: `${url}/sw_config_vpn/updateInfo`,

  postWireless: `${url}/sw_config_wireless/addInfo`,
  getWirelesss: `${url}/sw_config_wireless/getList`,
  getWireless: `${url}/sw_config_wireless/getInfo`,
  deleteWireless: `${url}/sw_config_wireless/deleteInfo`,
  putWireless: `${url}/sw_config_wireless/updateInfo`,

  postDatacenter: `${url}/sw_config_datacenter/addInfo`,
  getDatacenters: `${url}/sw_config_datacenter/getList`,
  getDatacenter: `${url}/sw_config_datacenter/getInfo`,
  deleteDatacenter: `${url}/sw_config_datacenter/deleteInfo`,
  putDatacenter: `${url}/sw_config_datacenter/updateInfo`,

  postSpecialline: `${url}/sw_config_specialline/addInfo`,
  getSpeciallines: `${url}/sw_config_specialline/getList`,
  getSpecialline: `${url}/sw_config_specialline/getInfo`,
  deleteSpecialline: `${url}/sw_config_specialline/deleteInfo`,
  putSpecialline: `${url}/sw_config_specialline/updateInfo`,

  postNetwork: `${url}/sw_config_network/addInfo`,
  getNetworks: `${url}/sw_config_network/getList`,
  getNetwork: `${url}/sw_config_network/getInfo`,
  deleteNetwork: `${url}/sw_config_network/deleteInfo`,
  putNetwork: `${url}/sw_config_network/updateInfo`,

  // addNetwork: `${url}/sw_admin/addNetwork`,  //网段查询接口  post 参数 network 支持模糊查询
  // getNetworks: `${url}/sw_admin/getNetworkList`,  //网段查询接口  post 参数 network 支持模糊查询
  // getNetwork: `${url}/sw_admin/getNetworkInfo`,
  // deleteNetwork: `${url}/sw_admin/deleteNetwork`, //删除网段接口 post 参数 id
  // updateNetwork: `${url}/sw_admin/updateNetwork`, //更新网段接口 post 参数id network type
  // checkNetworkExist: `${url}/sw_admin/checkNetworkExist`, //查询网段知否存在 post 参数 network
  // checkNetworkError: `${url}/sw_admin/checkNetworkError`, //检测网段是否正确  post 参数 network
  // changeNetworkStatus: `${url}/sw_admin/setNetworkStatus`, 

  postActiontype: `${url}/sw_config_actiontype/addInfo`,
  getActiontypes: `${url}/sw_config_actiontype/getList`,
  getActiontype: `${url}/sw_config_actiontype/getInfo`,
  deleteActiontype: `${url}/sw_config_actiontype/deleteInfo`,
  putActiontype: `${url}/sw_config_actiontype/updateInfo`,
  checkAction: `${url}/sw_admin/checkAction`,

  postNetworkequipment: `${url}/sw_config_networkequipment/addInfo`,
  getNetworkequipments: `${url}/sw_config_networkequipment/getList`,
  getNetworkequipment: `${url}/sw_config_networkequipment/getInfo`,
  deleteNetworkequipment: `${url}/sw_config_networkequipment/deleteInfo`,
  putNetworkequipment: `${url}/sw_config_networkequipment/updateInfo`,

  uploadCsvFile: `${url}/sw_config_upload/uploadAndCheckCsvFile`,
  uploadCsvData: `${url}/sw_config_upload/uploadCsvData`
}

export default Api

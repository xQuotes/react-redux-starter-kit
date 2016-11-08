const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,
  getBackups: `${url}/sw_control/getbackupList`,
  getBackup: `${url}/sw_control/getBackupInfo`,

  getVlans: `${url}/sw_control/getVlanList`,

  postNetwork: `${url}/sw_admin/addNetwork`,  //网段查询接口  post 参数 network 支持模糊查询
  getNetworks: `${url}/sw_admin/getNetworkList`,  //网段查询接口  post 参数 network 支持模糊查询
  getNetwork: `${url}/sw_admin/getNetworkInfo`,
  deleteNetwork: `${url}/sw_admin/deleteNetwork`, //删除网段接口 post 参数 id
  putNetwork: `${url}/sw_admin/updateNetwork`, //更新网段接口 post 参数id network type
  checkNetworkExist: `${url}/sw_admin/checkNetworkExist`, //查询网段知否存在 post 参数 network
  checkNetworkError: `${url}/sw_admin/checkNetworkError`, //检测网段是否正确  post 参数 network
  changeNetworkStatus: `${url}/sw_admin/setNetworkStatus`,

  getActiontypes: `${url}/sw_admin/getActionTypeList`,
  postActiontype: `${url}/sw_admin/addActionType`,
  deleteActiontype: `${url}/sw_admin/deleteActionType`,
  putActiontype: `${url}/sw_admin/updateActionType`,
  checkAction: `${url}/sw_admin/checkAction`,

  postMapping: `${url}/sw_config_mapping/addInfo`,
  getMappings: `${url}/sw_config_mapping/getList`,
  getMapping: `${url}/sw_config_mapping/getInfo`,
  deleteMapping: `${url}/sw_config_mapping/deleteInfo`,
  putMapping: `${url}/sw_config_mapping/updateInfo`,
  putMappings: `${url}/sw_config_mapping/updateList`,

  postServer: `${url}/sw_config_server/addInfo`,
  getServers: `${url}/sw_config_server/getList`,
  getServer: `${url}/sw_config_server/getInfo`,
  deleteServer: `${url}/sw_config_server/deleteInfo`,
  putServer: `${url}/sw_config_server/updateInfo`,
  putServers: `${url}/sw_config_server/updateList`,

  postNetworksub: `${url}/sw_config_networksub/addInfo`,
  getNetworksubs: `${url}/sw_config_networksub/getList`,
  getNetworksub: `${url}/sw_config_networksub/getInfo`,
  deleteNetworksub: `${url}/sw_config_networksub/deleteInfo`,
  putNetworksub: `${url}/sw_config_networksub/updateInfo`,
  putNetworksubs: `${url}/sw_config_networksub/updateList`,

  postNetworksec: `${url}/sw_config_networksec/addInfo`,
  getNetworksecs: `${url}/sw_config_networksec/getList`,
  getNetworksec: `${url}/sw_config_networksec/getInfo`,
  deleteNetworksec: `${url}/sw_config_networksec/deleteInfo`,
  putNetworksec: `${url}/sw_config_networksec/updateInfo`,
  putNetworksecs: `${url}/sw_config_networksec/updateList`,

  postDnat: `${url}/sw_config_dnat/addInfo`,
  getDnats: `${url}/sw_config_dnat/getList`,
  getDnat: `${url}/sw_config_dnat/getInfo`,
  deleteDnat: `${url}/sw_config_dnat/deleteInfo`,
  putDnat: `${url}/sw_config_dnat/updateInfo`,
  putDnats: `${url}/sw_config_dnat/updateList`,

  postSnat: `${url}/sw_config_snat/addInfo`,
  getSnats: `${url}/sw_config_snat/getList`,
  getSnat: `${url}/sw_config_snat/getInfo`,
  deleteSnat: `${url}/sw_config_snat/deleteInfo`,
  putSnat: `${url}/sw_config_snat/updateInfo`,
  putSnats: `${url}/sw_config_snat/updateList`,

  postVpn: `${url}/sw_config_vpn/addInfo`,
  getVpns: `${url}/sw_config_vpn/getList`,
  getVpn: `${url}/sw_config_vpn/getInfo`,
  deleteVpn: `${url}/sw_config_vpn/deleteInfo`,
  putVpn: `${url}/sw_config_vpn/updateInfo`,
  putVpns: `${url}/sw_config_vpn/updateList`,

  postWireless: `${url}/sw_config_wireless/addInfo`,
  getWirelesss: `${url}/sw_config_wireless/getList`,
  getWireless: `${url}/sw_config_wireless/getInfo`,
  deleteWireless: `${url}/sw_config_wireless/deleteInfo`,
  putWireless: `${url}/sw_config_wireless/updateInfo`,
  putWirelesss: `${url}/sw_config_wireless/updateList`,

  postDatacenter: `${url}/sw_config_datacenter/addInfo`,
  getDatacenters: `${url}/sw_config_datacenter/getList`,
  getDatacenter: `${url}/sw_config_datacenter/getInfo`,
  deleteDatacenter: `${url}/sw_config_datacenter/deleteInfo`,
  putDatacenter: `${url}/sw_config_datacenter/updateInfo`,
  putDatacenters: `${url}/sw_config_datacenter/updateList`,

  postSpecialline: `${url}/sw_config_specialline/addInfo`,
  getSpeciallines: `${url}/sw_config_specialline/getList`,
  getSpecialline: `${url}/sw_config_specialline/getInfo`,
  deleteSpecialline: `${url}/sw_config_specialline/deleteInfo`,
  putSpecialline: `${url}/sw_config_specialline/updateInfo`,
  putSpeciallines: `${url}/sw_config_specialline/updateList`,

  postNetworkequipment: `${url}/sw_config_networkequipment/addInfo`,
  getNetworkequipments: `${url}/sw_config_networkequipment/getList`,
  getNetworkequipment: `${url}/sw_config_networkequipment/getInfo`,
  deleteNetworkequipment: `${url}/sw_config_networkequipment/deleteInfo`,
  putNetworkequipment: `${url}/sw_config_networkequipment/updateInfo`,
  putNetworkequipments: `${url}/sw_config_networkequipment/updateList`,

  uploadCsvFile: `${url}/sw_config_upload/uploadAndCheckCsvFile`,
  uploadCsvData: `${url}/sw_config_upload/uploadCsvData`,

postBrand: `${url}/sw_config_brand/addInfo`,
  getBrands: `${url}/sw_config_brand/getList`,
  getBrand: `${url}/sw_config_brand/getInfo`,
  deleteBrand: `${url}/sw_config_brand/deleteInfo`,
  putBrand: `${url}/sw_config_brand/updateInfo`,
  putBrands: `${url}/sw_config_brand/updateList`,

postAccountmanager: `${url}/sw_config_accountmanager/addInfo`,
  getAccountmanagers: `${url}/sw_config_accountmanager/getList`,
  getAccountmanager: `${url}/sw_config_accountmanager/getInfo`,
  deleteAccountmanager: `${url}/sw_config_accountmanager/deleteInfo`,
  putAccountmanager: `${url}/sw_config_accountmanager/updateInfo`,
  putAccountmanagers: `${url}/sw_config_accountmanager/updateList`,

/*file_append*/
  
  downloadActiontypeCSV: `/csv_templates/actiontype.csv`,
  downloadDatacenterCSV: `/csv_templates/datacenter.csv`,
  downloadDnatCSV: `/csv_templates/dnat.csv`,
  downloadMappingCSV: `/csv_templates/mapping.csv`,
  downloadNetworkCSV: `/csv_templates/network.csv`,
  downloadNetworkequipmentCSV: `/csv_templates/networkequipment.csv`,
  downloadNetworksecCSV: `/csv_templates/networksec.csv`,
  downloadNetworksubCSV: `/csv_templates/networksub.csv`,
  downloadServerCSV: `/csv_templates/server.csv`,
  downloadSnatCSV: `/csv_templates/snat.csv`,
  downloadSpeciallineCSV: `/csv_templates/specialline.csv`,
  downloadVlanCSV: `/csv_templates/vlan.csv`,
  downloadVpnCSV: `/csv_templates/vpn.csv`,
  downloadWirelessCSV: `/csv_templates/wireless.csv`
}

export default Api

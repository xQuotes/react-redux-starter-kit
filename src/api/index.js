const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postDb: `${url}/sw_cmdb_db/addInfo`,
  getDbs: `${url}/sw_cmdb_db/getList`,
  getDb: `${url}/sw_cmdb_db/getInfo`,
  getDb: `${url}/sw_cmdb_db/deleteInfo`,
  getDb: `${url}/sw_cmdb_db/updateInfo`,

  postMulsearch: `${url}/sw_cmdb_mulsearch/addInfo`,
  getMulsearchs: `${url}/sw_cmdb_mulsearch/getList`,
  getMulsearch: `${url}/sw_cmdb_mulsearch/getInfo`,
  getMulsearch: `${url}/sw_cmdb_mulsearch/deleteInfo`,
  getMulsearch: `${url}/sw_cmdb_mulsearch/updateInfo`,

  postQuicksearch: `${url}/sw_cmdb_quicksearch/addInfo`,
  getQuicksearchs: `${url}/sw_cmdb_quicksearch/getList`,
  getQuicksearch: `${url}/sw_cmdb_quicksearch/getInfo`,
  getQuicksearch: `${url}/sw_cmdb_quicksearch/deleteInfo`,
  getQuicksearch: `${url}/sw_cmdb_quicksearch/updateInfo`,

  postMysetting: `${url}/sw_cmdb_mysetting/addInfo`,
  getMysettings: `${url}/sw_cmdb_mysetting/getList`,
  getMysetting: `${url}/sw_cmdb_mysetting/getInfo`,
  getMysetting: `${url}/sw_cmdb_mysetting/deleteInfo`,
  getMysetting: `${url}/sw_cmdb_mysetting/updateInfo`,

  postIPmanage: `${url}/sw_cmdb_ipmanage/addInfo`,
  getIPmanages: `${url}/sw_cmdb_ipmanage/getList`,
  getIPmanage: `${url}/sw_cmdb_ipmanage/getInfo`,
  getIPmanage: `${url}/sw_cmdb_ipmanage/deleteInfo`,
  getIPmanage: `${url}/sw_cmdb_ipmanage/updateInfo`,

  postNetworkmanage: `${url}/sw_cmdb_networkmanage/addInfo`,
  getNetworkmanages: `${url}/sw_cmdb_networkmanage/getList`,
  getNetworkmanage: `${url}/sw_cmdb_networkmanage/getInfo`,
  getNetworkmanage: `${url}/sw_cmdb_networkmanage/deleteInfo`,
  getNetworkmanage: `${url}/sw_cmdb_networkmanage/updateInfo`,

  postConnection: `${url}/sw_cmdb_connection/addInfo`,
  getConnections: `${url}/sw_cmdb_connection/getList`,
  getConnection: `${url}/sw_cmdb_connection/getInfo`,
  getConnection: `${url}/sw_cmdb_connection/deleteInfo`,
  getConnection: `${url}/sw_cmdb_connection/updateInfo`,

  postIdcmessage: `${url}/sw_cmdb_idcmessage/addInfo`,
  getIdcmessages: `${url}/sw_cmdb_idcmessage/getList`,
  getIdcmessage: `${url}/sw_cmdb_idcmessage/getInfo`,
  getIdcmessage: `${url}/sw_cmdb_idcmessage/deleteInfo`,
  getIdcmessage: `${url}/sw_cmdb_idcmessage/updateInfo`,

  postCabinetmessage: `${url}/sw_cmdb_cabinetmessage/addInfo`,
  getCabinetmessages: `${url}/sw_cmdb_cabinetmessage/getList`,
  getCabinetmessage: `${url}/sw_cmdb_cabinetmessage/getInfo`,
  getCabinetmessage: `${url}/sw_cmdb_cabinetmessage/deleteInfo`,
  getCabinetmessage: `${url}/sw_cmdb_cabinetmessage/updateInfo`,

  postSpaceshow: `${url}/sw_cmdb_spaceshow/addInfo`,
  getSpaceshows: `${url}/sw_cmdb_spaceshow/getList`,
  getSpaceshow: `${url}/sw_cmdb_spaceshow/getInfo`,
  getSpaceshow: `${url}/sw_cmdb_spaceshow/deleteInfo`,
  getSpaceshow: `${url}/sw_cmdb_spaceshow/updateInfo`,

  postProduction: `${url}/sw_cmdb_production/addInfo`,
  getProductions: `${url}/sw_cmdb_production/getList`,
  getProduction: `${url}/sw_cmdb_production/getInfo`,
  getProduction: `${url}/sw_cmdb_production/deleteInfo`,
  getProduction: `${url}/sw_cmdb_production/updateInfo`,

  postDevicuse: `${url}/sw_cmdb_devicuse/addInfo`,
  getDevicuses: `${url}/sw_cmdb_devicuse/getList`,
  getDevicuse: `${url}/sw_cmdb_devicuse/getInfo`,
  getDevicuse: `${url}/sw_cmdb_devicuse/deleteInfo`,
  getDevicuse: `${url}/sw_cmdb_devicuse/updateInfo`,

  postServermessage: `${url}/sw_cmdb_servermessage/addInfo`,
  getServermessages: `${url}/sw_cmdb_servermessage/getList`,
  getServermessage: `${url}/sw_cmdb_servermessage/getInfo`,
  getServermessage: `${url}/sw_cmdb_servermessage/deleteInfo`,
  getServermessage: `${url}/sw_cmdb_servermessage/updateInfo`,

  postApplymessage: `${url}/sw_cmdb_applymessage/addInfo`,
  getApplymessages: `${url}/sw_cmdb_applymessage/getList`,
  getApplymessage: `${url}/sw_cmdb_applymessage/getInfo`,
  getApplymessage: `${url}/sw_cmdb_applymessage/deleteInfo`,
  getApplymessage: `${url}/sw_cmdb_applymessage/updateInfo`,

  postSoftwarepackage: `${url}/sw_cmdb_softwarepackage/addInfo`,
  getSoftwarepackages: `${url}/sw_cmdb_softwarepackage/getList`,
  getSoftwarepackage: `${url}/sw_cmdb_softwarepackage/getInfo`,
  getSoftwarepackage: `${url}/sw_cmdb_softwarepackage/deleteInfo`,
  getSoftwarepackage: `${url}/sw_cmdb_softwarepackage/updateInfo`,

  postAuthsearch: `${url}/sw_cmdb_authsearch/addInfo`,
  getAuthsearchs: `${url}/sw_cmdb_authsearch/getList`,
  getAuthsearch: `${url}/sw_cmdb_authsearch/getInfo`,
  getAuthsearch: `${url}/sw_cmdb_authsearch/deleteInfo`,
  getAuthsearch: `${url}/sw_cmdb_authsearch/updateInfo`,

  postInstruction: `${url}/sw_cmdb_instruction/addInfo`,
  getInstructions: `${url}/sw_cmdb_instruction/getList`,
  getInstruction: `${url}/sw_cmdb_instruction/getInfo`,
  getInstruction: `${url}/sw_cmdb_instruction/deleteInfo`,
  getInstruction: `${url}/sw_cmdb_instruction/updateInfo`,

  /*file_append*/
}

export default Api

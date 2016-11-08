export const switches = 's' // 交换机自动化 

const Url = {
  ads: '/',
  index: `/${switches}/backups`,
  login: '/login',
  logout: '/logout',
  register: '/register',

  // 利用率
  switchesBackups: `/${switches}/backups`,
  switchesBackup: `/${switches}/backup`,
  switchesVlans: `/${switches}/vlans`,

  switchesMappings: `/${switches}/mappings`,
  switchesServers: `/${switches}/servers`,
  switchesNetworksubs: `/${switches}/networksubs`,
  switchesNetworksecs: `/${switches}/networksecs`,
  switchesDnats: `/${switches}/dnats`,
  switchesSnats: `/${switches}/snats`,
  switchesVpns: `/${switches}/vpns`,
  switchesWirelesss: `/${switches}/wirelesss`,
  switchesDatacenters: `/${switches}/datacenters`,
  switchesSpeciallines: `/${switches}/speciallines`,
  switchesNetworkequipments: `/${switches}/networkequipments`,

  switchesNetworks: `/${switches}/networks`,
  switchesActiontypes: `/${switches}/actiontypes`,
  switchesBrands: `/${switches}/brands`,
  switchesAccountmanagers: `/${switches}/accountmanagers`,
  /*file_append*/
}

export default Url
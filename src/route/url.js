export const switches = 's' // 交换机自动化 

const Url = {
  ads: '/',
  index: `/${switches}/network`,
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

  switchesNetwork: `/${switches}/network`,
  switchesActions: `/${switches}/actions`,
}

export default Url
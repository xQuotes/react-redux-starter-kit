export const switches = 's' // 交换机自动化 

const Url = {
  ads: '/',
  index: `/${switches}/network`,
  login: '/login',
  logout: '/logout',
  register: '/register',

  // 利用率
  switchesNetwork: `/${switches}/network`,
  switchesActions: `/${switches}/actions`,
  switchesBackups: `/${switches}/backups`,
  switchesBackup: `/${switches}/backup`,

  switchesMap: `/${switches}/mappings`,
  switchesMapUpload:  `/${switches}/uploadcsv/mapping`,
  switchesVlans: `/${switches}/vlans`
}

export default Url
export const cmdb = 'c' // 交换机自动化 

const Url = {
  ads: '/',
  index: `/${cmdb}`,
  login: '/login',
  logout: '/logout',
  register: '/register',
  
  cmdbLogs: `/${cmdb}/logs`,
  cmdbPermissions: `/${cmdb}/permissions`,
  cmdbTables: `/${cmdb}/tables`,
  /*file_append*/
}

export default Url
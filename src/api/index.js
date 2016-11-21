const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postLog: `${url}/sw_cmdb_log/addInfo`,
  getLogs: `${url}/sw_cmdb_log/getList`,
  getLog: `${url}/sw_cmdb_log/getInfo`,
  getLog: `${url}/sw_cmdb_log/deleteInfo`,
  getLog: `${url}/sw_cmdb_log/updateInfo`,

  postPermission: `${url}/sw_cmdb_permission/addInfo`,
  getPermissions: `${url}/sw_cmdb_permission/getList`,
  getPermission: `${url}/sw_cmdb_permission/getInfo`,
  getPermission: `${url}/sw_cmdb_permission/deleteInfo`,
  getPermission: `${url}/sw_cmdb_permission/updateInfo`,

  postTable: `${url}/sw_cmdb_table/addInfo`,
  getTables: `${url}/sw_cmdb_table/getList`,
  getTable: `${url}/sw_cmdb_table/getInfo`,
  getTable: `${url}/sw_cmdb_table/deleteInfo`,
  getTable: `${url}/sw_cmdb_table/updateInfo`,

  /*file_append*/
}

export default Api

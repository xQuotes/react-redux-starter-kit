const url = '/web';

const Api = {
  login: 'http://auth.ifos.ifengidc.com',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postTable: `${url}/sw_cmdb_table/addInfo`,
  getTables: `${url}/sw_cmdb_table/getList`,
  getTable: `${url}/sw_cmdb_table/getInfo`,
  getTable: `${url}/sw_cmdb_table/deleteInfo`,
  getTable: `${url}/sw_cmdb_table/updateInfo`,

  /*file_append*/
}

export default Api

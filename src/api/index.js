const url = 'http://47.93.50.131:8080/api'

const Api = {
  login: 'http://locahost:3332/login',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postTable: `${url}/table/savetable`,
  getTables: `/table/list`,
  getTable: `${url}/sw_config_datacenter/getInfo`,
  deleteTable: `${url}/sw_config_datacenter/deleteInfo`,
  putTable: `${url}/table/savetable`,
  putTables: `${url}/table/savetable`,

  postFormula: `${url}/calculationformula/saveformula`,
  getFormulas: `/calculationformula/list`,
  getFormula: `${url}/sw_config_datacenter/getInfo`,
  deleteFormula: `${url}/sw_config_datacenter/deleteInfo`,
  putFormula: `${url}/calculationformula/saveformula`,
  putFormulas: `${url}/calculationformula/saveformula`,

  postUser: `${url}/sw_config_datacenter/addInfo`,
  getUsers: `${url}/sw_config_datacenter/getList`,
  getUser: `${url}/sw_config_datacenter/getInfo`,
  deleteUser: `${url}/sw_config_datacenter/deleteInfo`,
  putUser: `${url}/sw_config_datacenter/updateInfo`,
  putUsers: `${url}/sw_config_datacenter/updateList`,

  postNews: `${url}/sw_config_datacenter/addInfo`,
  getNewss: `${url}/sw_config_datacenter/getList`,
  getNews: `${url}/sw_config_datacenter/getInfo`,
  deleteNews: `${url}/sw_config_datacenter/deleteInfo`,
  putNews: `${url}/sw_config_datacenter/updateInfo`,
  putNewss: `${url}/sw_config_datacenter/updateList`
}

export default Api

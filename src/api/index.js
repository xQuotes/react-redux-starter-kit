const url = 'http://47.93.50.131:8080/api'

const Api = {
  login: 'http://locahost:3332/login',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postCaculator: `${url}/sw_config_datacenter/addInfo`,
  getCaculators: `${url}/sw_config_datacenter/getList`,
  getCaculator: `${url}/sw_config_datacenter/getInfo`,
  deleteCaculator: `${url}/sw_config_datacenter/deleteInfo`,
  putCaculator: `${url}/sw_config_datacenter/updateInfo`,
  putCaculators: `${url}/sw_config_datacenter/updateList`,

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

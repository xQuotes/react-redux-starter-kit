const api = '/api'

const Api = {
  getCode: `${api}/user/register`,
  register: `${api}/user/registerbymobile`,
  login: `${api}/user/loginbymobile`,

  getCaculators: `${api}/calculator/list`,

  getCore: `${api}/core/list`,
  getTable: `${api}/table/tail`,

  getMapdatas: `${api}/mapdata/list`,
  getMapdata: `${api}/mapdata/tail`
}

export default Api
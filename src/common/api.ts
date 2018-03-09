const api = '/api'

const Api = {
  getCode: `${api}/user/register`,
  register: `${api}/user/registerbymobile`,
  login: `${api}/user/loginbymobile`,

  getCaculators: `${api}/calculator/list`,

  getCore: `${api}/cost/list`,
  getTable: `${api}/table/list`,

  getMapdatas: `${api}/mapdata/list`,
  getMapdata: `${api}/mapdata/tail`,

  getStandard: `${api}/file/list`,
  getTargetdata: `${api}/targetdata/list`
}

export default Api

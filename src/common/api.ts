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

<<<<<<< HEAD
  getStandard: `${api}/file/list`
=======
  getStandard: `${api}/file/list`,
  getTargetdata: `${api}/targetdata/list`
>>>>>>> 54e9962e9d4bf470d58e987d3f23ab00e6845aba
}

export default Api

const admin = 'http://admin.anyfees.com:8080/api'
const ip = 'http://47.93.50.131:8080/api'
const url = admin //'/api'

const Api = {
  login: 'http://locahost:3332/login',

  logout: `${url}/sw_user/logout`,
  getMe: `${url}/sw_user/getUserInfo`,

  postCaculator: `${url}/calculator/savecalculator`,
  getCaculators: `${url}/calculator/list`,
  getCaculator: `${url}/calculator/tail`,
  deleteCaculator: `${url}/calculator/deletedcalculator`,
  putCaculator: `${url}/calculator/savecalculator`,
  putCaculators: `${url}/calculator/savecalculator`,

  postMapdata: `${url}/mapdata/savemapdata`,
  getMapdatas: `${url}/mapdata/list`,
  getMapdata: `${url}/mapdata/tail`,
  deleteMapdata: `${url}/mapdata/deletedmapdata`,
  putMapdata: `${url}/mapdata/savemapdata`,
  putMapdatas: `${url}/mapdata/savemapdata`,

  postTable: `${url}/table/savetable`,
  getTables: `${url}/table/list`,
  getTable: `${url}/table/tail`,
  deleteTable: `${url}/table/deletedtable`,
  putTable: `${url}/table/savetable`,
  putTables: `${url}/table/savetable`,

  postFormula: `${url}/calculationformula/savecalculationformula`,
  getFormulas: `${url}/calculationformula/list`,
  getFormula: `${url}/calculationformula/tail`,
  deleteFormula: `${url}/calculationformula/deletecalculationformula`,
  putFormula: `${url}/calculationformula/savecalculationformula`,
  putFormulas: `${url}/calculationformula/savecalculationformula`,

  postUser: ``,
  getUsers: `${url}/admin/userlist`,
  getUser: ``,
  deleteUser: ``,
  putUser: ``,
  putUsers: ``,

  postNews: `${url}/answer/saveinfor`,
  getNewss: `${url}/answer/inforlist`,
  getNews: `${url}/answer/infordetails`,
  deleteNews: `${url}/answer/deletedinfor`,
  auditNews: `${url}/answer/putawayinfor`,
  putNews: `${url}/answer/saveinfor`,
  putNewss: `${url}/answer/saveinfor`,

  postQA: `${url}/answer/saveanswer`,
  getQAs: `${url}/answer/answerlist`,
  getQA: `${url}/answer/answerdetails`,
  deleteQA: `${url}/answer/deletedanswer`,
  auditQA: `${url}/answer/putawayanswer`,
  putQA: `${url}/answer/saveanswer`,
  putQAs: `${url}/answer/saveanswer`
}

export default Api

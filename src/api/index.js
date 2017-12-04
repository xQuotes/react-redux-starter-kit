const admin = 'http://admin.anyfees.com/api'
const ip = '/api'
const url = process.env.NODE_ENV === 'production' ? admin : ip //'/api'

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

  login: `${url}/admin/loginbymobile`,
  getUsers: `${url}/admin/userlist`,
  getUser: ``,
  deleteUser: ``,
  resetPassword: `${url}/admin/resetpassword`,
  putUsers: ``,

  postNews: `${url}/infor/saveinfor`,
  getNewss: `${url}/infor/inforlist`,
  getNews: `${url}/infor/infordetails`,
  deleteNews: `${url}/infor/deletedinfor`,
  auditNews: `${url}/infor/putawayinfor`,
  putNews: `${url}/infor/saveinfor`,
  putNewss: `${url}/infor/saveinfor`,

  postGuide: `${url}/standard/savestandard`,
  getGuides: `${url}/standard/standardlist`,
  getGuide: `${url}/standard/standarddetails`,
  deleteGuide: `${url}/standard/deletedstandard`,
  auditGuide: `${url}/standard/putawaystandard`,
  putGuide: `${url}/standard/savestandard`,
  putGuides: `${url}/standard/savestandard`,

  postQA: `${url}/answer/saveanswer`,
  getQAs: `${url}/answer/answerlist`,
  getQA: `${url}/answer/answerdetails`,
  deleteQA: `${url}/answer/deletedanswer`,
  auditQA: `${url}/answer/putawayanswer`,
  putQA: `${url}/answer/saveanswer`,
  putQAs: `${url}/answer/saveanswer`
}

export default Api

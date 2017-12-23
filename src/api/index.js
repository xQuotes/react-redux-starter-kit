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

  postMapdata: `${url}/mapdata/savemapdata`,
  getMapdatas: `${url}/mapdata/list`,
  getMapdata: `${url}/mapdata/tail`,
  deleteMapdata: `${url}/mapdata/deletedmapdata`,
  putMapdata: `${url}/mapdata/savemapdata`,

  postTable: `${url}/table/savetable`,
  getTables: `${url}/table/list`,
  getTable: `${url}/table/tail`,
  deleteTable: `${url}/table/deletedtable`,
  putTable: `${url}/table/savetable`,

  postCoreTable: `${url}/cost/savetable`,
  getCoreTables: `${url}/cost/list`,
  getCoreTable: `${url}/cost/tail`,
  deleteCoreTable: `${url}/cost/deletedtable`,
  putCoreTable: `${url}/cost/savetable`,

  postFormula: `${url}/calculationformula/savecalculationformula`,
  getFormulas: `${url}/calculationformula/list`,
  getFormula: `${url}/calculationformula/tail`,
  deleteFormula: `${url}/calculationformula/deletecalculationformula`,
  putFormula: `${url}/calculationformula/savecalculationformula`,

  login: `${url}/admin/loginbymobile`,
  getUsers: `${url}/admin/userlist`,
  getUser: ``,
  deleteUser: ``,
  resetPassword: `${url}/admin/resetpassword`,

  postNews: `${url}/infor/saveinfor`,
  getNewss: `${url}/infor/inforlist`,
  getNews: `${url}/infor/infordetails`,
  deleteNews: `${url}/infor/deletedinfor`,
  auditNews: `${url}/infor/putawayinfor`,
  putNews: `${url}/infor/saveinfor`,

  postTool: `${url}/tool/save`,
  getTools: `${url}/tool/list`,
  getTool: `${url}/tool/details`,
  deleteTool: `${url}/tool/deleted`,
  auditTool: `${url}/tool/putaway`,
  putTool: `${url}/tool/save`,

  postBidding: `${url}/bidding/save`,
  getBiddings: `${url}/bidding/list`,
  getBidding: `${url}/bidding/details`,
  deleteBidding: `${url}/bidding/deleted`,
  auditBidding: `${url}/bidding/putaway`,
  putBidding: `${url}/bidding/save`,

  postGuide: `${url}/standard/savestandard`,
  getGuides: `${url}/standard/standardlist`,
  getGuide: `${url}/standard/standarddetails`,
  deleteGuide: `${url}/standard/deletedstandard`,
  auditGuide: `${url}/standard/putawaystandard`,
  putGuide: `${url}/standard/savestandard`,

  postQA: `${url}/answer/saveanswer`,
  getQAs: `${url}/answer/answerlist`,
  getQA: `${url}/answer/answerdetails`,
  deleteQA: `${url}/answer/deletedanswer`,
  auditQA: `${url}/answer/putawayanswer`,
  putQA: `${url}/answer/saveanswer`
}

export default Api

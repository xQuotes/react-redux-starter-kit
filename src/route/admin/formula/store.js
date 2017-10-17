import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class FormulaStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: '造价指标id',
    item: '表行名',
    itemKey: '表行名key',
    contentType: '内容类型',
    parameters: '参数名称',
    presetValue: '预置值',
    formulaType: '表类型',
    type: '计算器类型',
    unit: '单位',
    valueRange: '取值范围',
    defaultValue: '默认',
    orderNumber: '序号',
    updateTime: '更新时间',
    remark: '备注'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getFormulas,
    delete: Api.deleteFormula,
    post: Api.postFormula,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putFormula,
    puts: Api.putFormulas,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new FormulaStore()
  }
}

import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class TableStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: '造价指标id',
    item: '表行名',
    itemKey: '表行名key',
    contentType: '内容类型',
    // parameters: '参数名称',
    // presetValue: '预置选项',
    defaultValue: '默认值',
    tableType: '表类型',
    type: '计算器类型',
    areaCode: '地区',
    unit: '单位',
    additionalID: '附加项ID',
    valueRange: '取值范围',
    orderNumber: '序号',
    updateTime: '更新时间',
    remark: '备注'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getTables,
    delete: Api.deleteTable,
    post: Api.postTable,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putTable,
    puts: Api.putTables,
    exports: Api.exports
  }

  static fromJS(array = []) {
    return new TableStore()
  }
}

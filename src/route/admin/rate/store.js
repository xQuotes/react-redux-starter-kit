import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class rateStore extends Store {
  constructor(props) {
    super(props)
  }

  fields = {
    //id: '造价指标id',
    calculatorItem: '计算项目',
    calculatorType: '计算器类型',
    rateId: '造价计算器计算项ID',
    // contentType: '计算器类型',
    price: '价格',
    rate: '公式',
    rateLevel: '公式级别',
    updateTime: '更新时间',
    remark: '备注'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getRates,
    delete: Api.deleteRate,
    post: Api.postRate,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putRate,
    puts: Api.putRates,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new rateStore()
  }
}

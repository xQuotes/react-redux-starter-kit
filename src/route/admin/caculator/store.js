import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class CaculatorStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: 'id',
    calculatorName: '计算器名称',
    type: '计算器类型',
    updateTime: '更新时间'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])

  @observable list = []
  // [
  //   {
  //     id: 1,
  //     calculatorName: '计算器1',
  //     type: 'jisuanqi1',
  //     updateTime: '2017-10-25'
  //   }
  // ]

  api = {
    gets: Api.getCaculators,
    delete: Api.deleteCaculator,
    post: Api.postCaculator,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putCaculator,
    puts: Api.putCaculators,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new CaculatorStore()
  }
}

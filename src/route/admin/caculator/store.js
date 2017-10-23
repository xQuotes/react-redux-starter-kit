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
    // id: '造价指标id',
    item: '计算器名称',
    itemKey: '计算器 key'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])
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

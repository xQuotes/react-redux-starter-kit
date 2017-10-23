import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class MapdataStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    // id: '造价指标id',
    item: '省',
    itemKey: '省 key'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])

  @observable
  list = [
    {
      id: 1,
      item: '北京',
      itemKey: 'beijing'
    }
  ]

  api = {
    gets: Api.getMapdatas,
    delete: Api.deleteMapdata,
    post: Api.postMapdata,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putMapdata,
    puts: Api.putMapdatas,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new MapdataStore()
  }
}

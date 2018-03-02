import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'
import MapModel from './model'

export default class ShuitubaochiStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    // id: '造价指标id',
    label: '名字',
    id: '值'
  }
  // updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])

  @observable list = MapModel

  api = {
    gets: Api.getShuitubaochis,
    delete: Api.deleteShuitubaochi,
    post: Api.postShuitubaochi,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putShuitubaochi,
    puts: Api.putShuitubaochis,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new ShuitubaochiStore()
  }
}

import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class NewsStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    // id: '造价指标id',
    title: '标题',
    content: '内容'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getNewss,
    delete: Api.deleteNews,
    post: Api.postNews,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putNews,
    puts: Api.putNewss,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new NewsStore()
  }
}

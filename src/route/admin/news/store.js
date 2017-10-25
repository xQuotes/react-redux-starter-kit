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
    id: 'id',
    title: '标题',
    content: '内容',
    classify: '结构类型',
    projectSite: '工程地点',
    time: '整理时间',
    type: '类型'
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

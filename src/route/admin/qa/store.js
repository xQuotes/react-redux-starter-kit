import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class QAStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: 'id',
    question: '提问内容',
    answerContent: '回答内容',
    updateTime: '更新时间'

    // totalCount 总数
    // noresult String  是 如果没有查到信息返回内容
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getQAs,
    delete: Api.deleteQA,
    post: Api.postQA,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putQA,
    puts: Api.putQAs,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new QAStore()
  }
}

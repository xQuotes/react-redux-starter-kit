import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class UserStore extends Store {
  constructor(props) {
    super(props)
  }


  fields = {
    id: 'id',
    question: '提问内容',
    answerContent: '回答内容',
    mobile: '手机号',
    role: '用户类型',
    nickName: '用户名',
    times: '生成文档次数',
    deleted: '是否被冻结',
    updateTime: '更新时间'

    // totalCount 总数
    // noresult String  是 如果没有查到信息返回内容
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])

  api = {
    gets: Api.getUsers,
    delete: Api.deleteUser,
    post: Api.postUser,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putUser,
    puts: Api.putUsers,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new UserStore()
  }
}

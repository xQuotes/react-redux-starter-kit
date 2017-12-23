import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class BiddingStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: 'id',
    name: '名称',
    url: '下载地址',
    content: '说明',
    type: '类型', // 工具类型， 下载/链接
    remark: '备注'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getBiddings,
    get: Api.getBidding,
    delete: Api.deleteBidding,
    post: Api.postBidding,
    put: Api.putBidding
  }
  static fromJS(array = []) {
    return new BiddingStore()
  }
}

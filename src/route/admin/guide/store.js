import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class GuideStore extends Store {
  constructor(props) {
    super(props)
  }

  fields = {
    //id: '造价指标id',
    areaCode: '地区',
    name: '名称',
    type: '类型',
    url: '链接',
    remark: '备注'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  // searchFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getGuides,
    delete: Api.deleteGuide,
    post: Api.postGuide,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putGuide,
    puts: Api.putGuides,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new GuideStore()
  }
}

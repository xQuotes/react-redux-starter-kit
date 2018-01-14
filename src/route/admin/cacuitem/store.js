import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class ProjectStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: 'id',
    formulaName: '计算项名称',
    areaCode: '地区区号',
    areaName: '地区名称',
    standardName: '标准名称',
    updateTime: '更新时间'
  }

  // id String  否 id
  // updateTime String  否 更新时间
  // formulaName String  否 计算项名称
  // areaCode String  否 地区区号
  // areaName String  否 地区名称
  // standardName String  否  标准名称
  // totalCount String  否 总条数

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
    gets: Api.getProjects,
    delete: Api.deleteProject,
    post: Api.postProject,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putProject,
    puts: Api.putProjects,
    exports: Api.exports
  }
  static fromJS(array = []) {
    return new ProjectStore()
  }
}

import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class FileStore extends Store {
  constructor(props) {
    super(props)
  }
  fields = {
    id: 'ID',
    // type: '分类', // 1：自制案例；2:造价规范；3：工具；4：造价信息
    typeName: '分类',
    urlType: 'url类型',
    url: 'url地址',
    fileName: '文件名称',
    imageUrl: '图片',
    documentDescription: '文件描述',
    //download 下载链接 link 跳转链接 html 描述html链接 pdf 描述pdf链接 content 内容描述
    // serverName: '文件服务器层级', //例如清单：detailed，定额：quota
    orderNum: '排序',
    updateTime: '更新时间'
  }
  updateFields = _.omit(this.fields, ['id', 'updateTime'])
  api = {
    gets: Api.getFiles,
    delete: Api.deleteFile,
    post: Api.postFile,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putFile,
    puts: Api.putFiles,
    exports: Api.exports
  }

  static fromJS(array = []) {
    return new FileStore()
  }
}

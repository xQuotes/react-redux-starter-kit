import { observable, action } from 'mobx'
import { Modal } from 'antd'
import Store from '../../stores/store'
import Api from '../../common/api'

// import dataSource from './const'

import Fetch from '../../common/fetch'

export default class SearchStore extends Store {
  @observable costindexs = [] //dataSource.list.databody
  @observable costindex = {}
  @observable laborcosts = []
  @observable laborcost = {}
  @observable targetdata = []

  api = {
    getCostindex: Api.getStandard,
    getTargetdata: Api.getTargetdata,
    gets: '',
    get: '',
    getCore: '',
    post: '',
    put: '',
    delete: ''
  }

  @action
  getCostindex(formData: any, params: object = {}) {
    let url = this.api.getCostindex
    return Fetch({
      url,
      data: formData,
      method: 'post'
    }).then((data: any) => {
      if (data.code < 0) {
        return
      } else {
        if (data.databody.noresult) {
          Modal.error({
            title: '',
            content: data.databody.noresult
          })
        } else {
          this[formData.typeName + 's'] = data.databody || []
        }
      }
    })
  }

  @action
  selectCostindex = (type: string, data: {}) => {
    this[type] = data
  }

  @action
  getTargetdata = (formData: any, params: object = {}) => {
    /**
     * id
updateTime
monthData
priceData
projectName
yearData
     */

    let url = this.api.getTargetdata
    return Fetch({
      url,
      data: formData,
      method: 'post'
    }).then((data: any) => {
      if (data.code < 0) {
        return
      } else {
        if (data.databody.noresult) {
          Modal.error({
            title: '',
            content: data.databody.noresult
          })
        } else {
          this.targetdata = data.databody || []
        }
      }
    })
  }
}

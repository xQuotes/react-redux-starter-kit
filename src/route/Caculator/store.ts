import { observable, action } from 'mobx'
import { Modal } from 'antd'
import Store from '../../stores/store'
import Api from '../../common/api'

import RApi from './api'

// import dataSource from './const'
import mapData from '../../components/Echarts/const'

import Fetch from '../../common/fetch'

export default class CaculatorStore extends Store {
  @observable list = [] //dataSource.list.databody
  @observable item = [] //dataSource.item.databody
  @observable itemType = ''
  @observable presetValue = {}
  @observable results = {}
  @observable presetVisible = false

  @observable
  selectMapItem = {
    name: '全国',
    value: 0
  }

  api = {
    gets: Api.getCaculators,
    get: Api.getTable,
    getCore: Api.getCore,
    post: '',
    put: '',
    delete: ''
  }

  @action
  getServers(formData: any, params: object = {}) {
    let url = this.api.gets
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
          this.list = data.databody || []
        }
      }
    })
  }

  @action
  getResults(formData: any, params: object = {}) {
    let url = RApi[this.itemType]
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
          this.results = data.databody || []
        }
      }
    })
  }

  @action
  getServer(formData: any, params: object = {}) {
    let url = this.api.get
    let data = {}
    if (!formData.type) {
      url = this.api.getCore
      data = {
        areaCode: mapData[formData.code].value
      }
    } else {
      data = {
        type: '' + formData.type
      }
    }
    // mapData[
    return Fetch({
      url,
      data,
      method: 'post'
    }).then((data: any) => {
      if (data.databody.noresult) {
        Modal.error({
          title: '',
          content: data.databody.noresult
        })
      } else {
        this.item = data.databody || []
      }
    })
  }

  @action
  setSelectMapItem(data: { name: string; value: number }, type: any) {
    this.getServer({
      type,
      code: data.value
    })
    this.selectMapItem = data

    this.itemType = type
  }
}

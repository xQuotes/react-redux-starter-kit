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
  @observable projects = []
  @observable itemType = 701
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
        this.projects = []
        this.item = []
        Modal.error({
          title: '',
          content: data.databody.noresult
        })
      } else {
        this.projects = []
        this.item = data.databody || []
      }
    })
  }

  @action
  getFormulaServer(formData: any, params: object = {}) {
    let url = this.api.get
    let data = {
      formulaId: formData.formulaId
    }
    return Fetch({
      url,
      data,
      method: 'post'
    }).then((data: any) => {
      if (data.databody.noresult) {
        this.item = []
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
  getProject(formData: any, params: object = {}) {
    let url = '/api/formulaproject/list'
    let data = {}
    if (!formData.type) {
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
        this.item = []
        Modal.error({
          title: '',
          content: data.databody.noresult
        })
      } else {
        this.item = []
        if (data.databody) {
          this.projects = data.databody
          this.getFormulaServer({
            formulaId: data.databody[0].id
          })
        }
      }
    })
  }

  @action
  setSelectMapItem(
    data: { name: string; value: number },
    type: any,
    formulaId: any
  ) {
    console.log(type, data)
    if (formulaId) {
      this.getFormulaServer({
        formulaId
      })
    } else if (!type) {
      this.getProject({
        type,
        code: data.value
      })
    } else {
      this.getServer({
        type,
        code: data.value
      })
    }
    this.selectMapItem = data

    this.itemType = type
  }
}

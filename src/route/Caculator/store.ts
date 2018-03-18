import { observable, action } from 'mobx'
import { Modal } from 'antd'
import Store from '../../stores/store'
import Api from '../../common/api'

import RApi from './api'

// import dataSource from './const'
import mapData from '../../components/Echarts/const'

import Fetch from '../../common/fetch'

const cacu = [
  {
    type: '11',
    calculatorName: '造价计算器'
  },
  {
    type: '13',
    calculatorName: '地质灾害评估收费计算器'
  },
  {
    type: '15',
    calculatorName: '水土保持计算器'
  },
  {
    type: '12',
    calculatorName: '施工图计算器'
  }
]

export default class CaculatorStore extends Store {
  @observable list = [] //dataSource.list.databody
  @observable item = [] //dataSource.item.databody
  @observable projects = []
  @observable itemType = 701
  @observable presetValue = {}
  @observable results = {}
  @observable presetVisible = false
  @observable formulaId = ''

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
          this.list = data.databody.concat(cacu)
        }
      }
    })
  }

  @action
  getResults(formData: any, params: object = {}) {
    let url = RApi[this.itemType] || RApi[9]
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

    this.formulaId = formData.formulaId

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
        areaCode: mapData[formData.code].value,
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
    console.log(type, data, formulaId)
    if (formulaId) {
      this.getFormulaServer({
        formulaId
      })

      this.formulaId = formulaId
    } else if (type === '11' || type === '12') {
      this.getProject({
        type,
        code: data.value
      })
      this.selectMapItem = data

      this.itemType = type
    } else if (type === '15' || type === '13') {
      this.getProject({
        type,
        code: 0
      })
      this.selectMapItem = data

      this.itemType = type
    } else {
      this.getServer({
        type,
        code: data.value
      })
      this.selectMapItem = data

      this.itemType = type
    }
  }
}

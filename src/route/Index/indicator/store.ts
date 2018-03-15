import { action, observable } from 'mobx'

import Store from '../../../stores/store'
import Fetch from '../../../common/fetch'
import Api from '../../../common/api'

export default class IndicatorStore extends Store {
  api = {
    get: '',
    gets: Api.getStandard,
    post: '',
    put: '',
    delete: ''
  }

  @observable list = [] //dataSource.list.databody
  @observable item = [] //dataSource.item.databody
  @observable selectMapItem = {}
  @observable componentType = 'costindex'
  @observable searchData = {
    typeName: 'costindex',
    pageNum: 1,
    pageSize: 10
  }

  @action
  gets(formData: { typeName: string; }) {
    return Fetch({
      url: this.api.gets,
      data: formData,
      method: 'post'
    }).then(data => {
      if (data.databody.noresult) {
        this.list = []
      } else {
        this.list = data.databody
      }
    })
  }

  @action
  setSelectMapItem(
    searchData: any
    ) {
    this.searchData = searchData

    this.gets(searchData)
  }
}

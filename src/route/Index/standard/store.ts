import { action, observable } from 'mobx'

import Store from '../../../stores/store'
import Fetch from '../../../common/fetch'
import Api from '../../../common/api'

export default class CaculatorStore extends Store {
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
  @observable typeName = ''
  @observable componentType = 'guide'

  @action
  gets(formData: { typeName: string; codeName?: any }) {
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
    data: { name: string; value: number },
    type: any,
    componentType: string
  ) {
    this.selectMapItem = data
    this.typeName = type
    this.componentType = componentType
    if (type === 'detailed') {
      this.gets({
        typeName: type
      })
    } else {
      this.gets({
        typeName: type,
        codeName: data.name
      })
    }
  }
}

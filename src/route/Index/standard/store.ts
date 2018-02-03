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

  @action
  gets(formData: { typeName: string }) {
    return Fetch({
      url: this.api.gets,
      data: formData,
      method: 'post'
    }).then(data => {
      this.list = data.databody
    })
  }
}

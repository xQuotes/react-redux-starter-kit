// import { action } from 'mobx'

import Store from '../../stores/store'
// import Fetch from '../../common/fetch'
import Api from '../../common/api'

export default class CaculatorStore extends Store {
  api = {
    gets: Api.getCaculators,
    get: Api.getCaculator,
    post: '',
    put: '',
    delete: ''
  }
}

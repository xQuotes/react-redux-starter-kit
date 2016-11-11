import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'

export default class BrandStore extends Store {
  constructor(props) {
    super(props)
  }
  api = {
    gets: Api.getBrands,
    delete: Api.deleteBrand,
    post: Api.postBrand,
    uploadCsvData: Api.uploadCsvData,
    put: Api.putBrand,
    puts: Api.putBrands,
  }
  static fromJS(array = []) {
    return new BrandStore()
  }
}


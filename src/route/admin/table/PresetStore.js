import { observable, computed, action } from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'
import Store from '../../../stores/Store'
let uuid = 1

export default class PresetStore extends Store {
  @observable butvalue = '查看说明'
  @observable title = '设计复杂程度调整(DEMO)'
  @observable description = '操作指南：直接双击或者单击后点击选择(DEMO)'
  @observable
  select = {
    key: uuid++ + +new Date(),
    lable: `I级/n
                1.地形、地质、水文条件简单；/n
                2.开拓运输系统单一，斜井串车，平硐溜井，主、副、风井条数≤3条；/n
                3.矿石品种单一，不分采的采矿工程/n`,
    value: '1',
    type: 'text' //input
  }
  @observable
  option = {
    key: uuid++ + +new Date(),
    title: '坑内采矿',
    selects: [this.select]
  }
  @observable
  item = {
    key: uuid++ + +new Date(),
    title: '2.矿山采选工程',
    options: [this.option]
  }
  @observable list = [this.item]

  @action
  setPresetValue(item) {
    this.title = item.title
    this.description = item.description
    this.list = item.list
  }
  static fromJS(array = []) {
    return new PresetStore()
  }
}

class Store {
  constructor(isLoading, list, fields, updateFields, searchFields, visible, params) { //构造函数
    this.isLoading = isLoading;
    this.list = list;
    this.fields = fields;
    this.updateFields = updateFields;
    this.searchFields = searchFields;
    this.visible = visible;
    this.params = params;
  }

  setSearchDatas(formData={}, params={}) {
    this.searchDatas = formData
  }

  getServers(formData={}, params={}) {
    this.isLoading = true
  }

  deleteServer(formData={}, params={}) {
    this.isLoading = true
  }

  // 保存单条
  postServer(formData={}, params={}) {
    this.isLoading = true
  }

  // 保存多条
  postServers(formData={}, params={}) {
    this.isLoading = true
  }

  putServer(formData={}, params={}) {
    this.isLoading = true
  }

  putServers(formData={}, params={}) {
    console.log(formData)
    // formData['deadline'] = formData['deadline'] && formData['deadline'].format('YYYY-MM-DD')
    
    this.isLoading = true
  }

  toggleVisible() {
    this.visible = !this.visible
  }

  setParams(formData) {
    this.params = formData
  }

  toJS() {
    return this.list.map(data => data)
  }

  static fromJS(options) {
    return new Store(options)
  }
}

class AStore extends Store {
  constructor(props) {
    super(props)
  }
}

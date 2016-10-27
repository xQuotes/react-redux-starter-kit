import {inject, observer} from 'mobx-react'
import {Form} from 'antd'
const FormItem = Form.Item

import SearchForm from '../../components/search'

@inject('mappingStore')
@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {mappingStore: store} = this.props
    const {searchDatas} = store

    var searchDataTitileServer = [{
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: searchDatas.hostname
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: searchDatas.ext_ip
      },
      placeholder: '请输入搜索公网IP'
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: searchDatas.int_ip
      },
      placeholder: '请输入搜索内网IP'
    }]

    return(
      <SearchForm store={store} title={searchDataTitileServer}/>
      )
  }
}

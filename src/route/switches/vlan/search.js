import {inject, observer} from 'mobx-react'
import {Form} from 'antd'
const FormItem = Form.Item

import SearchForm from '../../components/search'

@inject('vlanStore')
@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {vlanStore: store} = this.props
    const {searchDatas} = store

    var searchDataTitileServer = [{
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: searchDatas.hostname
      },
      placeholder: '请输入主机名'
    }, {
      name: 'switchIp',
      label: '交换机IP',
      fieldOptions: {
        initialValue: searchDatas.switchIp
      },
      placeholder: '请输入交换机IP'
    }, {
      name: 'mac',
      label: '品牌',
      fieldOptions: {
        initialValue: searchDatas.brand
      },
      placeholder: '请输入MAC地址'
    }, {
      name: 'serverIp',
      label: '服务器IP',
      fieldOptions: {
        initialValue: searchDatas.serverIp
      },
      placeholder: '请输入服务器IP'
    }]

    return(
      <SearchForm store={store} title={searchDataTitileServer}/>
      )
  }
}

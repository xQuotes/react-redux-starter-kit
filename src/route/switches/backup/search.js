import {inject, observer} from 'mobx-react'
import moment from 'moment'
import {Form} from 'antd'
const FormItem = Form.Item

import SearchForm from '../../components/search'

@inject('backupStore')
@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {backupStore} = this.props
    const {searchDatas} = backupStore

    var searchDataTitileServer = [{
      name: 'name',
      label: '主机名',
      fieldOptions: {
        initialValue: searchDatas.name
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'host',
      label: 'IP',
      fieldOptions: {
        initialValue: searchDatas.host
      },
      placeholder: '请输入搜索IP'
    }, {
      name: 'brand',
      label: '品牌',
      fieldOptions: {
        initialValue: searchDatas.brand
      },
      placeholder: '请输入搜索品牌'
    }, {
      name: 'sn',
      label: 'SN',
      fieldOptions: {
        initialValue: searchDatas.sn
      },
      placeholder: '请输入搜索SN'
    }, {
      type: 'date',
      name: 'day',
      label: '日期',
      fieldOptions: {
        initialValue: moment(searchDatas.day) || moment(new Date())
      }
    }]

    return(
      <SearchForm store={backupStore} title={searchDataTitileServer}/>
      )
  }
}

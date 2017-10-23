import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddTableModal from './add'
import JSONView from '../../components/jsonview/index'

import { defaultOptionsValue } from './model'

@inject('tableStore')
@observer
export default class Tables extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { tableStore } = this.props
    tableStore.getServers({
      type: 11
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { tableStore } = this.props
    const { fields } = tableStore

    const tableHeader = _.map(fields, (v, k) => {
      if (k === 'presetValue') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 300,
          render: (text, record, index) => {
            let val = {}

            try {
              val = JSON.parse(text) || defaultOptionsValue
            } catch (err) {
              val = defaultOptionsValue
            }

            return <JSONView value={val} />
          }
        }
      }

      if (k === 'presetValue') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 300,
          render: (text, record, index) => {
            return <JSONView value={JSON.parse(text)} />
          }
        }
      }
      return {
        title: v,
        dataIndex: k,
        key: k,
        width: 105,
        render: (text, record, index) => {
          return text
        }
      }
    })
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.tableStore}
          bcData={bcData}
          downloadCSV={Api.downloadTableCSV}
          funcEnName={'table'}
          tableHeader={tableHeader}
        />
        <AddTableModal />
      </div>
    )
  }
}

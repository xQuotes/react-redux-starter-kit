import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddCaculatorModal from './add'
import JSONView from '../../components/jsonview/index'

@inject('caculatorStore')
@observer
export default class Caculators extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { caculatorStore } = this.props
    caculatorStore.getServers({
      type: 11
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { caculatorStore } = this.props
    const { fields } = caculatorStore

    const caculatorHeader = _.map(fields, (v, k) => {
      if (k === 'presetValue') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 300,
          render: (text, record, index) => {
            let val = {}

            try {
              val = JSON.parse(text) || {}
            } catch (err) {
              val = {}
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
          store={this.props.caculatorStore}
          bcData={bcData}
          downloadCSV={Api.downloadCaculatorCSV}
          funcEnName={'caculator'}
          caculatorHeader={caculatorHeader}
        />
        <AddCaculatorModal />
      </div>
    )
  }
}

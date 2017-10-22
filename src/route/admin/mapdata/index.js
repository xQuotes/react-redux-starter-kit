import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddTableModal from './add'
import JSONView from '../../components/jsonview/index'

import { defaultOptionsValue } from './model'

@inject('mapDataStore')
@observer
export default class Tables extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { mapDataStore } = this.props
    mapDataStore.getServers({
      type: 1
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { mapDataStore } = this.props
    const { fields } = mapDataStore

    const mapDataHeader = _.map(fields, (v, k) => {
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
          store={this.props.mapDataStore}
          bcData={bcData}
          downloadCSV={Api.downloadTableCSV}
          funcEnName={'mapData'}
          mapDataHeader={mapDataHeader}
        />
        <AddTableModal />
      </div>
    )
  }
}

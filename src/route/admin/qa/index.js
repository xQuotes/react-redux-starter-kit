import { inject, observer } from 'mobx-react'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoTable'

@inject('QAStore')
@observer
export default class QAs extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { QAStore } = this.props
    QAStore.getServers()
  }
  render() {
    const { QAStore } = this.props
    const bcData = ['首页', '资讯管理', '列表']
    const tableHeader = _.map(QAStore.fields, (v, k) => {
      if (k === 'answerContent') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 105,
          render: (text, record, index) => {
            return (
              <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )
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
          tableHeader={tableHeader}
          store={this.props.QAStore}
          bcData={bcData}
          downloadCSV={Api.downloadQACSV}
          funcEnName={'QA'}
          addUrl={Url.QAAdd}
        />
      </div>
    )
  }
}

import {
  inject, observer
} from 'mobx-react'
import {
  Input,
  Card
} from 'antd'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/ruby'
import 'brace/theme/terminal'

import Url from 'Url'

import './backup.less'

@inject(
  'backupStore',
  'dashboardStore'
)
@observer
export default class BackupView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const bcData = ['首页', '常用服务', '备份管理']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  componentDidMount() {
    const { backupStore, params } = this.props
    backupStore.getBackupServer({
      id: params.id
    })
  }
  render() {
    const {backupStore} = this.props
    let backup = backupStore.file
    
    return(
      <div className="switches-network">
        <div className={classNames({"backup-view": true})}>
        <Card title="备份文件内容" style={{ width: '100%' }}>
          <AceEditor
            mode="ruby"
            theme="terminal"
            name="UNIQUE_ID_OF_DIV"
            value={backup}
            width="100%"
            editorProps={{$blockScrolling: true}}/>
        </Card>
        </div>
      </div>
      )
  }
}

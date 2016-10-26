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

@inject('backupStore') @observer
export default class BackupView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: ''
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用服务', '备份管理']
    // dispatch(changeUrl(bcData))
  }
  componentDidMount() {
    const { params } = this.props
    
    dispatch(getBackup({
      id: params.id
    }))
  }
  render() {
    const {SBackup} = this.props
    let backup = _.isEmpty(SBackup.data) ? '' : SBackup.data
    
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

// module.exports = TypeBar

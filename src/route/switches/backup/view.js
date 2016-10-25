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

export default class BackupView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: ''
    }
  }
  componentWillMount() {
    const { dispatch } = this.props
    const bcData = ['首页', '常用服务', '备份管理']
    dispatch(changeUrl(bcData))
  }
  componentDidMount() {
    const { dispatch, params } = this.props
    
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

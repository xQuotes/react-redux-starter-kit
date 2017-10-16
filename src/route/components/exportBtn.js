import {
  observer
} from 'mobx-react'
import classNames from 'classnames'
import {
  Upload,
  Button,
  Icon,
  message,
  Modal,
  Select,
  Alert
} from 'antd'
const Option = Select.Option

import Url from 'Url'
import Auth from 'Auth'
import Api from 'Api'

@observer
export default class exportBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      url: ''
    }
  }
  hideModal() {
    this.setState({ visible: false });
  }
  handleChange(e) {
    this.setState({
      insertType: e
    })
  }
  handleExport() {
    const { store } = this.props

    store.exportServers()

    this.setState({
      visible: true
    })
  }
  handleDownload(e) {
    this.hideModal()
  }
  render() {
    const {
      visible,
      url
    } = this.state
    const {
      store
    } = this.props
    return(
      <div className="upload-btn">
        <div className="action-type">
          <Button type="ghost" onClick={::this.handleExport}>
            <Icon type="export" /> 导出数据
          </Button>
        </div>

        <Modal title="下载文件"
          visible={!!store.exportUrl && visible}
          width="400"
          footer={[
            <Button
              key="cancel"
              type="ghost"
              size="large"
              onClick={::this.hideModal}>
              {'取消'}
            </Button>,
            <a href={store.exportUrl} target="_blank">
              <Button
                key="confirm"
                type="primary"
                size="large"
                onClick={::this.handleDownload}>
                {'确定'}
              </Button>
            </a>
          ]}>
          <Alert message="数据文件生成成功，点击 确定 下载文件!" type="warning" />
        </Modal>
      </div>
      )
  }
}

import {
  observer
} from 'mobx-react'
import {
  Button,
  Icon
} from 'antd'

@observer
export default class DownloadBtn extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { downloadUrl } = this.props
    
    return(
      <div className="download-btn">
        <a href={downloadUrl} target="_blank">
          <Button type="ghost">
            <Icon type="download" /> 下载模版
          </Button>
        </a>
      </div>
      )
  }
}

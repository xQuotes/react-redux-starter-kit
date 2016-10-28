import classNames from 'classnames'
import {
  Upload,
  Icon,
  message,
  Modal,
  Table
} from 'antd'
const Dragger = Upload.Dragger;

import Url from 'Url'
import Auth from 'Auth'
import Api from 'Api'

export default class UploadDragger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      validate: true,
      uploadData: {
        columns: {},
        dataList: []
      }
    }
  }
  hideModal() {
    this.setState({ visible: false });
  }
  handleSubmit(e) {
    const { store, params } = this.props
    const paramsData = params || {}
    const {uploadData, validate} = this.state

    validate && store.postServers(uploadData.dataList)
    validate && this.hideModal()
  }
  render() {
    const { params } = this.props
    const paramsData = params || {}

    const uploadProps = {
      multiple: false,
      name: 'uploadfile',
      action: Api.uploadCsvFile,
      data: {
        type: paramsData.type
      },
      accept: ".csv",
      headers: {
        authorization: 'authorization-text',
        AuthToken: Auth.getAuthCookie('UserIfosSession') || ''
      },
      onChange: (info) => {
        if (info.file.status === 'done') {
          const {statuscode, msg, data} = info.file.response
          if (statuscode == '200') {
            message.success(`${info.file.name} 上传成功。`);
            const {conf, list, error: rsError} = data

            let tableHeader = _.map(conf, (v, k) => {
              return {
                title: v,
                dataIndex: k,
                key: k,
                width: 80,
                render: (text, record, index) => {
                  return !!text ? <div className={classNames({'item-error': !text.validate})}>{text.value}</div> : text
                }
              }
              
            })

            this.setState({
              visible: true,
              validate: rsError,
              uploadData: {
                columns: tableHeader,
                dataList: list
              }
            })
          } else {
            Modal.error({
              title: '',
              content: msg
            })
          }
        } else if (info.file.status === 'error') {
          Modal.error({
            title: '',
            content: `${info.file.name} 上传失败。`
          })
          // message.error(`${info.file.name} 上传失败。`);
        }
      },
    }

    const {
      visible,
      validate,
      uploadData
    } = this.state
    return(
      <div className="switches-mapping">
        <div className="switches-action-type">
           <div style={{ marginTop: 16, height: 180 }}>
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
              <p className="ant-upload-hint">支持单个或批量上传，请上传.csv格式文件</p>
            </Dragger>
          </div>
        </div>

        <Modal title="上传内容"
          visible={visible}
          cancelText="重新上传"
          okText="确认提交"
          width="800"
          onOk={::this.handleSubmit}
          onCancel={::this.hideModal}>
          {!validate && <div className="table-header-warning"><span className="item-error">橙色</span>为验证有错的字段，请在CSV中修改后重新上传！</div>}
          <Table columns={uploadData.columns} dataSource={uploadData.dataList}/>
        </Modal>
      </div>
      )
  }
}


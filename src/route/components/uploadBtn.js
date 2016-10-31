import classNames from 'classnames'
import {
  Upload,
  Button,
  Icon,
  message,
  Modal
} from 'antd'

import Url from 'Url'
import Auth from 'Auth'
import Api from 'Api'

import DataTable from './/table'

export default class UploadBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      validate: true,
      uploadData: {
        columns: [],
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
    console.log(store)
    console.log(uploadData)
    validate && store.postServers({
      type: paramsData.type,
      list: uploadData.dataList
    })
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
      uploadData,
      fileList
    } = this.state
    return(
      <div className="upload-btn">
        <div className="action-type">
          <Upload {...uploadProps}>
            <Button type="ghost">
              <Icon type="upload" /> 上传文件
            </Button>
          </Upload>
        </div>

        <Modal title="上传内容"
          visible={visible}
          cancelText="重新上传"
          okText="确认提交"
          width="800"
          onOk={::this.handleSubmit}
          onCancel={::this.hideModal}>
          {!validate && <div className="table-header-warning"><span className="item-error">橙色</span>为验证有错的字段，请在CSV中修改后重新上传！</div>}
          <DataTable
            columns={uploadData.columns}
            dataSource={uploadData.dataList}/>
        </Modal>
      </div>
      )
  }
}

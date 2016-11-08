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
  Select
} from 'antd'
const Option = Select.Option

import Url from 'Url'
import Auth from 'Auth'
import Api from 'Api'

import DataTable from './table'

@observer
export default class UploadBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      validate: true,

      insertType: '',
      uploadData: {
        columns: [],
        dataList: []
      }
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
  handleSubmit(e) {
    const { store, params } = this.props
    const paramsData = params || {}
    const {uploadData, validate, insertType} = this.state
    console.log(insertType)
    console.log(uploadData)
    !insertType && Modal.error({
      title: ' ',
      content: '导入方式不能为空',
    });  
    insertType && validate && store.postServers({
      type: paramsData.type,
      list: uploadData.dataList
    }, {
      insert_type: insertType
    })
    insertType && validate && this.hideModal()
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
          <div style={{
            margin: '10px 0'
          }}>
            <Select size="large" defaultValue="" style={{ width: 200 }} onChange={::this.handleChange}>
              <Option value="" >请选择导入方式</Option>
              <Option value="just_insert">追加导入</Option>
              <Option value="delete_before_insert">清空导入</Option>
            </Select>
          </div>
          <DataTable
            columns={uploadData.columns}
            dataSource={uploadData.dataList}/>
        </Modal>
      </div>
      )
  }
}

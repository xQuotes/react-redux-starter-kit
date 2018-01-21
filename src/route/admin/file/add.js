import { Select, Upload, Icon, message, Input } from 'antd'
import { inject, observer } from 'mobx-react'
const Dragger = Upload.Dragger
import AddForm from '../../components/switches/commonInfoAdd'
import ReactQuill from '../../components/edit/index'

@inject('fileStore')
@observer
export default class AddFile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 'case'
    }
  }
  fileIpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error('IP 格式不正确')])
      } else {
        callback()
      }
    }
  }
  filePortExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!portReg.test(value)) {
        callback([new Error('端口格式不正确')])
      } else {
        callback()
      }
    }
  }
  uploadProps({ form, urlType }) {
    const { type } = this.state

    return {
      name: 'file',
      multiple: true,
      showUploadList: false,
      action: 'http://admin.anyfees.com/api/file/upload',
      data: {
        name: type
      },
      withCredentials: true,
      headers: {
        'X-Requested-With': null
      },
      onChange(info) {
        const status = info.file.status
        console.log(info)
        if (urlType === 'url') {
          form.setFieldsValue({
            fileName: info.file.name
          })
        }
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          console.log(info)
          const response = info.file.response

          form.setFieldsValue({
            [urlType]: response.databody.url
          })
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
  }
  render() {
    const { fileStore } = this.props
    const paramsData = fileStore.params
    const file = fileStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(fileStore.updateFields, (v, k) => {
      console.log(file[k], this.state.type)
      if (k === 'typeName') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return (
                <Select
                  defaultValue={this.state.type}
                  onChange={v => {
                    this.setState({
                      type: v
                    })
                  }}
                >
                  <Option value="case">自制案例</Option>
                  <Option value="detailed">造价规范-清单</Option>
                  <Option value="quota">造价规范-定额</Option>
                  <Option value="tool">工具</Option>
                  <Option value="cost">造价信息</Option>
                </Select>
              )
            },
            fieldOptions: {
              initialValue: file[k] || this.state.type,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'documentDescription') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return <Input.TextArea rows={4} />
            },
            fieldOptions: {
              initialValue: file[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'url') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return (
                <Dragger
                  {...this.uploadProps({
                    form: props.form,
                    urlType: 'url'
                  })}
                >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">上传文件</p>
                  <p>{props.form.getFieldValue('url')}</p>
                </Dragger>
              )
            },
            fieldOptions: {
              initialValue: file[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'imageUrl') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return (
                <Dragger
                  {...this.uploadProps({
                    form: props.form,
                    urlType: 'imageUrl'
                  })}
                >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">上传文件</p>
                  <p>{props.form.getFieldValue('imageUrl')}</p>
                </Dragger>
              )
            },
            fieldOptions: {
              initialValue: file[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'urlType') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return (
                <Select>
                  <Option value="download">下载链接</Option>
                  <Option value="link">跳转链接</Option>
                  <Option value="html">描述html链接</Option>
                  <Option value="pdf">描述pdf链接</Option>
                  <Option value="content">内容描述</Option>
                </Select>
              )
            },
            fieldOptions: {
              initialValue: file[k] || 'detailed',
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: file[k],
            rules: [
              // { required: true, whitespace: true, message: '请输入主机名' }
            ]
          },
          placeholder: `请输入${v}`
        }
      )
    })
    formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : file.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={fileStore} title={formDataTitileServer} />
  }
}

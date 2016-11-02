import {
  inject, observer
} from 'mobx-react'
import {
  Table,
  Input,
  Button,
  Form,
  Modal,
  Select,
  Popconfirm,
  Upload,
  Icon
} from 'antd'
const FormItem = Form.Item
const Option = Select.Option

import {ipReg, portReg} from '../../../common/utils/regex'

import ModalForm from '../../components/form'

@Form.create()
@inject(
  '/*file_append*/Store'
  )
@observer
export default class Add/*File_append*/ extends React.Component {
  constructor(props) {
    super(props)
  }
  /*file_append*/IpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error("IP 格式不正确")]);
      } else {
        callback()
      }
    }
  }
  /*file_append*/PortExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      if (!portReg.test(value)) {
        callback([new Error("端口格式不正确")]);
      } else {
        callback()
      }
    }
  }
  handleSubmit(e) {
    const {form, /*file_append*/Store} = this.props
    const {validateFields} = form
    const {params} = /*file_append*/Store

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()
      
      values.id ? /*file_append*/Store.putServer(data) : /*file_append*/Store.postServer(data)
    })
  }
  hideModal() {
    const {/*file_append*/Store} = this.props
    /*file_append*/Store.toggleVisible()
  }

  render() {
    const {form, /*file_append*/Store} = this.props
    const paramsData = /*file_append*/Store.params
    const /*file_append*/ = /*file_append*/Store.list.getById(paramsData.id) || {}

    let formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: /*file_append*/.id
        }
      }, {
        name: 'hostname',
        label: '主机名',
        fieldOptions: {
          initialValue: /*file_append*/.hostname,
          rules: [
            // { required: true, whitespace: true, message: '请输入主机名' }
          ],
        },
        placeholder: '请输入主机名'
      }, {
        name: 'ext_ip',
        label: '公网IP',
        fieldOptions: {
          initialValue: /*file_append*/.ext_ip,
          rules: [
            // { required: true, whitespace: true, message: '请输入公网IP' },
            { validator: ::this./*file_append*/IpExists },
          ],
        },
        placeholder: '如：123.125.114.144'
      }, {
        name: 'ext_port',
        label: '公网端口',
        fieldOptions: {
          initialValue: /*file_append*/.ext_port,
          rules: [
            // { required: true, whitespace: true, message: '请输入公网端口' },
            { validator: ::this./*file_append*/PortExists },
          ],
        },
        placeholder: '如：80',
      }, {
        name: 'int_ip',
        label: '内网IP',
        fieldOptions: {
          initialValue: /*file_append*/.int_ip,
          rules: [
            // { required: true, whitespace: true, message: '请输入内网IP' },
            { validator: ::this./*file_append*/IpExists },
          ],
        },
        placeholder: '如：192.168.1.1'
      }, {
        name: 'int_port',
        label: '内网端口',
        fieldOptions: {
          initialValue: /*file_append*/.int_port,
          rules: [
            // { required: true, whitespace: true, message: '请输入内网端口' },
            { validator: ::this./*file_append*/PortExists },
          ],
        },
        placeholder: '如：80'
      }
    ]

    // let formDataTitileServer = _.map(/*file_append*/Store.updateFields, (v, k)=> {
    //   return {
    //     name: k,
    //     label: v,
    //     fieldOptions: {
    //       initialValue: searchDatas[k]
    //     },
    //     placeholder: `请输入${v}`
    //   }
    // })

    return (
      <Modal title="操作映射"
          visible={/*file_append*/Store.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={/*file_append*/Store}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
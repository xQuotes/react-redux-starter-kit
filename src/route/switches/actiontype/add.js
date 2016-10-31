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
  'actiontypeStore'
  )
@observer
export default class AddActiontype extends React.Component {
  constructor(props) {
    super(props)
  }
  actiontypeIpExists(rule, value, callback) {
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
  actiontypePortExists(rule, value, callback) {
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
    const {form, actiontypeStore} = this.props
    const {validateFields} = form
    const {params} = actiontypeStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? actiontypeStore.putServer(data) : actiontypeStore.postServer(data)
    })
  }
  hideModal() {
    const {actiontypeStore} = this.props
    actiontypeStore.toggleVisible()
  }

  render() {
    const {form, actiontypeStore} = this.props
    const paramsData = actiontypeStore.params
    const actiontype = actiontypeStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: actiontype.id
      }
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: actiontype.hostname,
        rules: [
          { required: true, whitespace: true, message: '请输入主机名' }
        ],
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: actiontype.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.actiontypeIpExists },
        ],
      },
      placeholder: '如：123.125.114.144',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'ext_port',
      label: '公网端口',
      fieldOptions: {
        initialValue: actiontype.ext_port,
        rules: [
          { required: true, whitespace: true, message: '请输入公网端口' },
          { validator: ::this.actiontypePortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: actiontype.int_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入内网IP' },
          { validator: ::this.actiontypeIpExists },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'int_port',
      label: '内网端口',
      fieldOptions: {
        initialValue: actiontype.int_port,
        rules: [
          { required: true, whitespace: true, message: '请输入内网端口' },
          { validator: ::this.actiontypePortExists },
        ],
      },
      placeholder: '如：80'
    }]

    return (
      <Modal title="操作操作类型"
          visible={actiontypeStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={actiontypeStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
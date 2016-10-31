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
  'networkStore'
  )
@observer
export default class AddNetwork extends React.Component {
  constructor(props) {
    super(props)
  }
  networkIpExists(rule, value, callback) {
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
  networkPortExists(rule, value, callback) {
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
    const {form, networkStore} = this.props
    const {validateFields} = form
    const {params} = networkStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? networkStore.putServer(data) : networkStore.postServer(data)
    })
  }
  hideModal() {
    const {networkStore} = this.props
    networkStore.toggleVisible()
  }

  render() {
    const {form, networkStore} = this.props
    const paramsData = networkStore.params
    const network = networkStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: network.id
      }
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: network.hostname,
        rules: [
          { required: true, whitespace: true, message: '请输入主机名' }
        ],
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: network.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.networkIpExists },
        ],
      },
      placeholder: '如：123.125.114.144',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'ext_port',
      label: '公网端口',
      fieldOptions: {
        initialValue: network.ext_port,
        rules: [
          { required: true, whitespace: true, message: '请输入公网端口' },
          { validator: ::this.networkPortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: network.int_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入内网IP' },
          { validator: ::this.networkIpExists },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'int_port',
      label: '内网端口',
      fieldOptions: {
        initialValue: network.int_port,
        rules: [
          { required: true, whitespace: true, message: '请输入内网端口' },
          { validator: ::this.networkPortExists },
        ],
      },
      placeholder: '如：80'
    }]

    return (
      <Modal title="操作网段"
          visible={networkStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={networkStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
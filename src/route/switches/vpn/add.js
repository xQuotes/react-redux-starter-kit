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
  'vpnStore'
  )
@observer
export default class AddVpn extends React.Component {
  constructor(props) {
    super(props)
  }
  vpnIpExists(rule, value, callback) {
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
  vpnPortExists(rule, value, callback) {
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
    const {form, vpnStore} = this.props
    const {validateFields} = form
    const {params} = vpnStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? vpnStore.putServer(data) : vpnStore.postServer(data)
    })
  }
  hideModal() {
    const {vpnStore} = this.props
    vpnStore.toggleVisible()
  }

  render() {
    const {form, vpnStore} = this.props
    const paramsData = vpnStore.params
    const vpn = vpnStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: vpn.id
      }
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: vpn.hostname,
        rules: [
          { required: true, whitespace: true, message: '请输入主机名' }
        ],
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: vpn.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.vpnIpExists },
        ],
      },
      placeholder: '如：123.125.114.144',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'ext_port',
      label: '公网端口',
      fieldOptions: {
        initialValue: vpn.ext_port,
        rules: [
          { required: true, whitespace: true, message: '请输入公网端口' },
          { validator: ::this.vpnPortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: vpn.int_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入内网IP' },
          { validator: ::this.vpnIpExists },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'int_port',
      label: '内网端口',
      fieldOptions: {
        initialValue: vpn.int_port,
        rules: [
          { required: true, whitespace: true, message: '请输入内网端口' },
          { validator: ::this.vpnPortExists },
        ],
      },
      placeholder: '如：80'
    }]

    return (
      <Modal title="操作VPN"
          visible={vpnStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={vpnStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
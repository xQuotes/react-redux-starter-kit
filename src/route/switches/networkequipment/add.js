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
  'networkequipmentStore'
  )
@observer
export default class AddNetworkequipment extends React.Component {
  constructor(props) {
    super(props)
  }
  networkequipmentIpExists(rule, value, callback) {
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
  networkequipmentPortExists(rule, value, callback) {
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
    const {form, networkequipmentStore} = this.props
    const {validateFields} = form
    const {params} = networkequipmentStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? networkequipmentStore.putServer(data) : networkequipmentStore.postServer(data)
    })
  }
  hideModal() {
    const {networkequipmentStore} = this.props
    networkequipmentStore.toggleVisible()
  }

  render() {
    const {form, networkequipmentStore} = this.props
    const paramsData = networkequipmentStore.params
    const networkequipment = networkequipmentStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: networkequipment.id
      }
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: networkequipment.hostname,
        rules: [
          { required: true, whitespace: true, message: '请输入主机名' }
        ],
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: networkequipment.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.networkequipmentIpExists },
        ],
      },
      placeholder: '如：123.125.114.144',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'ext_port',
      label: '公网端口',
      fieldOptions: {
        initialValue: networkequipment.ext_port,
        rules: [
          { required: true, whitespace: true, message: '请输入公网端口' },
          { validator: ::this.networkequipmentPortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: networkequipment.int_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入内网IP' },
          { validator: ::this.networkequipmentIpExists },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'int_port',
      label: '内网端口',
      fieldOptions: {
        initialValue: networkequipment.int_port,
        rules: [
          { required: true, whitespace: true, message: '请输入内网端口' },
          { validator: ::this.networkequipmentPortExists },
        ],
      },
      placeholder: '如：80'
    }]

    return (
      <Modal title="操作网络设备"
          visible={networkequipmentStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={networkequipmentStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
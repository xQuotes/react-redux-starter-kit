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
  'networksubStore'
  )
@observer
export default class AddNetworksub extends React.Component {
  constructor(props) {
    super(props)
  }
  networksubIpExists(rule, value, callback) {
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
  networksubPortExists(rule, value, callback) {
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
    const {form, networksubStore} = this.props
    const {validateFields} = form
    const {params} = networksubStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()
      
      values.id ? networksubStore.putServer(data) : networksubStore.postServer(data)
    })
  }
  hideModal() {
    const {networksubStore} = this.props
    networksubStore.toggleVisible()
  }

  render() {
    const {form, networksubStore} = this.props
    const paramsData = networksubStore.params
    const networksub = networksubStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: networksub.id
      }
    }, {
      name: 'vlan',
      label: 'VLAN',
      fieldOptions: {
        initialValue: networksub.vlan,
        rules: [
          { required: true, whitespace: true, message: '请输入VLAN' }
        ],
      },
      placeholder: '请输入VLAN'
    }, {
      name: 'ip',
      label: '子网IP',
      fieldOptions: {
        initialValue: networksub.ip,
        rules: [
          { required: true, whitespace: true, message: '请输入子网IP' }
        ],
      },
      placeholder: '请输入子网IP'
    }, {
      name: 'port',
      label: '端口',
      fieldOptions: {
        initialValue: networksub.port,
        rules: [
          { required: true, whitespace: true, message: '请输入端口' },
          { validator: ::this.networksubPortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'mask',
      label: '子网掩码',
      fieldOptions: {
        initialValue: networksub.mask,
        rules: [
          { required: true, whitespace: true, message: '请输入子网掩码' }
        ],
      },
      placeholder: '请输入子网掩码'
    }, {
      name: 'gateway',
      label: '网关',
      fieldOptions: {
        initialValue: networksub.gateway,
        rules: [
          { required: true, whitespace: true, message: '请输入网关' }
        ],
      },
      placeholder: '请输入网关'
    }, {
      name: 'a_port_info',
      label: 'A端信息',
      fieldOptions: {
        initialValue: networksub.a_port_info,
        rules: [
          { required: true, whitespace: true, message: '请输入A端信息' }
        ],
      },
      placeholder: '请输入A端信息'
    }, {
      name: 'b_port_info',
      label: 'B端信息',
      fieldOptions: {
        initialValue: networksub.b_port_info,
        rules: [
          { required: true, whitespace: true, message: '请输入B端信息' }
        ],
      },
      placeholder: '请输入B端信息'
    }, {
      name: 'is_ospf',
      label: '是否是ospf',
      fieldOptions: {
        initialValue: networksub.is_ospf,
        rules: [
          { required: true, whitespace: true, message: '请输入是否是ospf' }
        ],
      },
      placeholder: '请输入是否是ospf'
    }, {
      name: 'equipment',
      label: '所属设备',
      fieldOptions: {
        initialValue: networksub.equipment,
        rules: [
          { required: true, whitespace: true, message: '请输入所属设备' }
        ],
      },
      placeholder: '请输入所属设备'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: networksub.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作子网"
          visible={networksubStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={networksubStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
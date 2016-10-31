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
  'datacenterStore'
  )
@observer
export default class AddDatacenter extends React.Component {
  constructor(props) {
    super(props)
  }
  datacenterIpExists(rule, value, callback) {
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
  datacenterPortExists(rule, value, callback) {
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
    const {form, datacenterStore} = this.props
    const {validateFields} = form
    const {params} = datacenterStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? datacenterStore.putServer(data) : datacenterStore.postServer(data)
    })
  }
  hideModal() {
    const {datacenterStore} = this.props
    datacenterStore.toggleVisible()
  }

  render() {
    const {form, datacenterStore} = this.props
    const paramsData = datacenterStore.params
    const datacenter = datacenterStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: datacenter.id
      }
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: datacenter.hostname,
        rules: [
          { required: true, whitespace: true, message: '请输入主机名' }
        ],
      },
      placeholder: '请输入搜索主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: datacenter.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.datacenterIpExists },
        ],
      },
      placeholder: '如：123.125.114.144',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'ext_port',
      label: '公网端口',
      fieldOptions: {
        initialValue: datacenter.ext_port,
        rules: [
          { required: true, whitespace: true, message: '请输入公网端口' },
          { validator: ::this.datacenterPortExists },
        ],
      },
      placeholder: '如：80',
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: datacenter.int_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入内网IP' },
          { validator: ::this.datacenterIpExists },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'int_port',
      label: '内网端口',
      fieldOptions: {
        initialValue: datacenter.int_port,
        rules: [
          { required: true, whitespace: true, message: '请输入内网端口' },
          { validator: ::this.datacenterPortExists },
        ],
      },
      placeholder: '如：80'
    }]

    return (
      <Modal title="操作机房信息"
          visible={datacenterStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={datacenterStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
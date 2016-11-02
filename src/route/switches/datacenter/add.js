import {
  toJS
} from 'mobx'
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

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(datacenterStore.params.ids))) {
        datacenterStore.putServers({
          ids: toJS(datacenterStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        datacenterStore.putServer(data)
      } else {
        datacenterStore.postServer(data)
      }
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
        initialValue: paramsData.actionType == 'clone' ? undefined : datacenter.id
      }
    }, {
      name: 'name',
      label: '机房名称',
      fieldOptions: {
        initialValue: datacenter.name,
        rules: [
          { required: true, whitespace: true, message: '请输入机房名称' }
        ],
      },
      placeholder: '请输入机房名称'
    }, {
      name: 'short_tag',
      label: '机房缩写',
      fieldOptions: {
        initialValue: datacenter.short_tag,
        rules: [
          { required: true, whitespace: true, message: '请输入机房缩写' }
        ],
      },
      placeholder: '请输入机房缩写'
    }, {
      name: 'area',
      label: '区域名称',
      fieldOptions: {
        initialValue: datacenter.area,
        rules: [
          { required: true, whitespace: true, message: '请输入区域名称' }
        ],
      },
      placeholder: '请输入区域名称'
    }, {
      name: 'pro_city',
      label: '省市',
      fieldOptions: {
        initialValue: datacenter.pro_city,
        rules: [
          { required: true, whitespace: true, message: '请输入省市' }
        ],
      },
      placeholder: '请输入省市'
    }, {
      name: 'detail_addr',
      label: '详细地址',
      fieldOptions: {
        initialValue: datacenter.detail_addr,
        rules: [
          { required: true, whitespace: true, message: '请输入详细地址' }
        ],
      },
      placeholder: '请输入详细地址'
    }, {
      name: 'charge',
      label: '机房负责人',
      fieldOptions: {
        initialValue: datacenter.charge,
        rules: [
          { required: true, whitespace: true, message: '请输入机房负责人' }
        ],
      },
      placeholder: '请输入机房负责人'
    }, {
      name: 'net_charge',
      label: '网络负责人',
      fieldOptions: {
        initialValue: datacenter.net_charge,
        rules: [
          { required: true, whitespace: true, message: '请输入网络负责人' }
        ],
      },
      placeholder: '请输入网络负责人'
    }, {
      name: 'acc_man',
      label: '大客户经理',
      fieldOptions: {
        initialValue: datacenter.acc_man,
        rules: [
          { required: true, whitespace: true, message: '请输入大客户经理' }
        ],
      },
      placeholder: '请输入大客户经理'
    }, {
      name: 'acc_man_phone',
      label: '大客户经理电话',
      fieldOptions: {
        initialValue: datacenter.acc_man_phone,
        rules: [
          { required: true, whitespace: true, message: '请输入大客户经理电话' }
        ],
      },
      placeholder: '请输入大客户经理电话'
    }, {
      name: 'duty_phone',
      label: '值班电话',
      fieldOptions: {
        initialValue: datacenter.duty_phone,
        rules: [
          { required: true, whitespace: true, message: '请输入值班电话' }
        ],
      },
      placeholder: '请输入值班电话'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: datacenter.remark
      },
      placeholder: '请输入备注'
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
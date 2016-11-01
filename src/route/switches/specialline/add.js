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

import ModalForm from '../../components/form'

@Form.create()
@inject(
  'speciallineStore'
  )
@observer
export default class AddSpecialline extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, speciallineStore} = this.props
    const {validateFields} = form
    const {params} = speciallineStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()
      
      values.id ? speciallineStore.putServer(data) : speciallineStore.postServer(data)
    })
  }
  hideModal() {
    const {speciallineStore} = this.props
    speciallineStore.toggleVisible()
  }

  render() {
    const {form, speciallineStore} = this.props
    const paramsData = speciallineStore.params
    const specialline = speciallineStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: specialline.id
      }
    }, {
      name: 'supplier',
      label: '供应商',
      fieldOptions: {
        initialValue: specialline.supplier,
        rules: [
          { required: true, whitespace: true, message: '请输入供应商' }
        ],
      },
      placeholder: '请输入供应商'
    }, {
      name: 'short_tag',
      label: '专线缩写',
      fieldOptions: {
        initialValue: specialline.short_tag,
        rules: [
          { required: true, whitespace: true, message: '请输入专线缩写' }
        ],
      },
      placeholder: '请输入专线缩写'
    }, {
      name: 'broadband',
      label: '宽带',
      fieldOptions: {
        initialValue: specialline.broadband,
        rules: [
          { required: true, whitespace: true, message: '请输入宽带' }
        ],
      },
      placeholder: '请输入宽带'
    }, {
      name: 'area',
      label: '区域名称',
      fieldOptions: {
        initialValue: specialline.area,
        rules: [
          { required: true, whitespace: true, message: '请输入区域名称' }
        ],
      },
      placeholder: '请输入区域名称'
    }, {
      name: 'a_name',
      label: '甲方名称',
      fieldOptions: {
        initialValue: specialline.a_name,
        rules: [
          { required: true, whitespace: true, message: '请输入甲方名称' }
        ],
      },
      placeholder: '请输入甲方名称'
    }, {
      name: 'b_name',
      label: '乙方名称',
      fieldOptions: {
        initialValue: specialline.b_name,
        rules: [
          { required: true, whitespace: true, message: '请输入乙方名称' }
        ],
      },
      placeholder: '请输入乙方名称'
    }, {
      name: 'acc_man',
      label: '大客户经理',
      fieldOptions: {
        initialValue: specialline.acc_man,
        rules: [
          { required: true, whitespace: true, message: '请输入大客户经理' }
        ],
      },
      placeholder: '请输入大客户经理'
    }, {
      name: 'acc_man_phone',
      label: '大客户经理电话',
      fieldOptions: {
        initialValue: specialline.acc_man_phone,
        rules: [
          { required: true, whitespace: true, message: '请输入大客户经理电话' }
        ],
      },
      placeholder: '请输入大客户经理电话'
    }, {
      name: 'datacenter',
      label: '所属机房',
      fieldOptions: {
        initialValue: specialline.datacenter,
        rules: [
          { required: true, whitespace: true, message: '请输入所属机房' }
        ],
      },
      placeholder: '请输入所属机房'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: specialline.ext_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入公网IP' }
        ],
      },
      placeholder: '请输入公网IP'
    }, {
      name: 'mask',
      label: '子网掩码',
      fieldOptions: {
        initialValue: specialline.mask,
        rules: [
          { required: true, whitespace: true, message: '请输入子网掩码' }
        ],
      },
      placeholder: '请输入子网掩码'
    }, {
      name: 'gateway',
      label: '公网网关',
      fieldOptions: {
        initialValue: specialline.gateway,
        rules: [
          { required: true, whitespace: true, message: '请输入公网网关' }
        ],
      },
      placeholder: '请输入公网网关'
    }, {
      name: 'is_inter_ip',
      label: '是否为互联IP',
      fieldOptions: {
        initialValue: specialline.is_inter_ip,
        rules: [
          { required: true, whitespace: true, message: '请输入是否为互联IP' }
        ],
      },
      placeholder: '请输入是否为互联IP'
    }, {
      name: 'gat_net_equipment',
      label: '网关所在网络设备',
      fieldOptions: {
        initialValue: specialline.gat_net_equipment,
        rules: [
          { required: true, whitespace: true, message: '请输入网关所在网络设备' }
        ],
      },
      placeholder: '请输入网关所在网络设备'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: specialline.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作专线信息"
          visible={speciallineStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={speciallineStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
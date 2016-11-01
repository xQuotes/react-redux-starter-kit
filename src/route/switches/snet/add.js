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
  'snetStore'
  )
@observer
export default class AddSnet extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, snetStore} = this.props
    const {validateFields} = form
    const {params} = snetStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()
      
      values.id ? snetStore.putServer(data) : snetStore.postServer(data)
    })
  }
  hideModal() {
    const {snetStore} = this.props
    snetStore.toggleVisible()
  }

  render() {
    const {form, snetStore} = this.props
    const paramsData = snetStore.params
    const snet = snetStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: snet.id
      }
    }, {
      name: 'sou_addr',
      label: '源地址',
      fieldOptions: {
        initialValue: snet.sou_addr,
        rules: [
          { required: true, whitespace: true, message: '请输入源地址' }
        ],
      },
      placeholder: '请输入源地址'
    }, {
      name: 'net_type',
      label: 'Net类型',
      fieldOptions: {
        initialValue: snet.net_type,
        rules: [
          { required: true, whitespace: true, message: '请输入Net类型' }
        ],
      },
      placeholder: '请输入Net类型',
      labelCol: 4,
      wrapperCol: 20
    }, {
      name: 'des_addr',
      label: '目的地址',
      fieldOptions: {
        initialValue: snet.des_addr,
        rules: [
          { required: true, whitespace: true, message: '请输入目的地址' }
        ],
      },
      placeholder: '请输入目的地址',
    }, {
      name: 'equipment',
      label: '所属设备',
      fieldOptions: {
        initialValue: snet.equipment,
        rules: [
          { required: true, whitespace: true, message: '请输入所属设备' }
        ],
      },
      placeholder: '请输入所属设备'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: snet.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作S-NET信息"
          visible={snetStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={snetStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
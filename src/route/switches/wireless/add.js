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
  'wirelessStore'
  )
@observer
export default class AddWireless extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, wirelessStore} = this.props
    const {validateFields} = form
    const {params} = wirelessStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? wirelessStore.putServer(data) : wirelessStore.postServer(data)
    })
  }
  hideModal() {
    const {wirelessStore} = this.props
    wirelessStore.toggleVisible()
  }

  render() {
    const {form, wirelessStore} = this.props
    const paramsData = wirelessStore.params
    const wireless = wirelessStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: wireless.id
      }
    }, {
      name: 'signal',
      label: '无线信号',
      fieldOptions: {
        initialValue: wireless.signal,
        rules: [
          { required: true, whitespace: true, message: '请输入无线信号' }
        ],
      },
      placeholder: '请输入无线信号'
    }, {
      name: 'auth_mode',
      label: '认证方式',
      fieldOptions: {
        initialValue: wireless.auth_mode,
        rules: [
          { required: true, whitespace: true, message: '请输入认证方式' }
        ],
      },
      placeholder: '请输入认证方式'
    }, {
      name: 'password',
      label: '密码',
      fieldOptions: {
        initialValue: wireless.password,
        rules: [
          { required: true, whitespace: true, message: '请输入密码' }
        ],
      },
      placeholder: '请输入密码'
    }, {
      name: 'sec_plo',
      label: '安全策略',
      fieldOptions: {
        initialValue: wireless.sec_plo,
        rules: [
          { required: true, whitespace: true, message: '请输入安全策略' }
        ],
      },
      placeholder: '请输入安全策略'
    }, {
      name: 'broadband',
      label: '限速宽带',
      fieldOptions: {
        initialValue: wireless.broadband,
        rules: [
          { required: true, whitespace: true, message: '请输入限速宽带' }
        ],
      },
      placeholder: '请输入限速宽带'
    }, {
      name: 'equipment',
      label: '所在设备',
      fieldOptions: {
        initialValue: wireless.equipment,
        rules: [
          { required: true, whitespace: true, message: '请输入所在设备' }
        ],
      },
      placeholder: '请输入所在设备'
    }, {
      name: 'is_hidden',
      label: '是否隐藏',
      fieldOptions: {
        initialValue: wireless.is_hidden,
        rules: [
          { required: true, whitespace: true, message: '请输入是否隐藏' }
        ],
      },
      placeholder: '请输入是否隐藏'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: wireless.remark,
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作无线信息"
          visible={wirelessStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={wirelessStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
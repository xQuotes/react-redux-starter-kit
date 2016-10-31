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
      name: 'type',
      label: '操作类型',
      fieldOptions: {
        initialValue: actiontype.type,
        rules: [
          { required: true, whitespace: true, message: '请输入操作类型' }
        ],
      },
      placeholder: '请输入操作类型'
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
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
  networkExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      const {form} = this.props

      // dispatch(checkNetworkError({
      //   network: value
      // }, (rs)=> {
      //   if(rs) {
      //     dispatch(checkNetworkExist({
      //       network: value,
      //       id: form.getFieldValue('id')
      //     }, (rs) => {
      //       if(rs) {
      //         callback()
      //       } else {
      //         callback([new Error("该网段信息重复")]);
      //       }
      //     }))
      //   } else {
      //     callback([new Error("该网段信息填写错误,正确格式为:192.168.1.1/24")])
      //   }
      // }))
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
      name: 'network',
      label: '网段',
      fieldOptions: {
        initialValue: network.network,
        rules: [
          { required: true, whitespace: true, message: '请输入网段' }
        ],
      },
      placeholder: '如：192.168.1.1/24'
    }, {
      name: 'type',
      label: '操作类型',
      fieldOptions: {
        initialValue: network.type,
        rules: [
          { required: true, whitespace: true, message: '请输入操作类型' },
        ],
      },
      placeholder: '请输入操作类型',
      labelCol: 4,
      wrapperCol: 20
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
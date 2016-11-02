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
  handleSubmit(e) {
    const {form, vpnStore} = this.props
    const {validateFields} = form
    const {params} = vpnStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(vpnStore.params.ids))) {
        vpnStore.putServers({
          ids: toJS(vpnStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        vpnStore.putServer(data)
      } else {
        vpnStore.postServer(data)
      }
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
      name: 'a_datacenter',
      label: 'A端机房',
      fieldOptions: {
        initialValue: vpn.a_datacenter,
        rules: [
          { required: true, whitespace: true, message: '请输入A端机房' }
        ],
      },
      placeholder: '请输入A端机房'
    }, {
      name: 'b_datacenter',
      label: 'B端机房',
      fieldOptions: {
        initialValue: vpn.b_datacenter,
        rules: [
          { required: true, whitespace: true, message: '请输入B端机房' }
        ],
      },
      placeholder: '请输入B端机房'
    }, {
      name: 'vpn_type',
      label: 'vpn类型',
      fieldOptions: {
        initialValue: vpn.vpn_type,
        rules: [
          { required: true, whitespace: true, message: '请输入vpn类型' }
        ],
      },
      placeholder: '请输入vpn类型'
    }, {
      name: 'a_intet_addr',
      label: 'A端互联地址',
      fieldOptions: {
        initialValue: vpn.a_intet_addr,
        rules: [
          { required: true, whitespace: true, message: '请输入A端互联地址' }
        ],
      },
      placeholder: '请输入A端互联地址'
    }, {
      name: 'b_intet_addr',
      label: 'B端互联地址',
      fieldOptions: {
        initialValue: vpn.b_intet_addr,
        rules: [
          { required: true, whitespace: true, message: '请输入B端互联地址' }
        ],
      },
      placeholder: '请输入B端互联地址'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: vpn.remark
      },
      placeholder: '请输入备注'
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
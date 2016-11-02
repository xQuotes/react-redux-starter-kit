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
  'networksecStore'
  )
@observer
export default class AddNetworksec extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, networksecStore} = this.props
    const {validateFields} = form
    const {params} = networksecStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(networksecStore.params.ids))) {
        networksecStore.putServers({
          ids: toJS(networksecStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        networksecStore.putServer(data)
      } else {
        networksecStore.postServer(data)
      }
    })
  }
  hideModal() {
    const {networksecStore} = this.props
    networksecStore.toggleVisible()
  }

  render() {
    const {form, networksecStore} = this.props
    const paramsData = networksecStore.params
    const networksec = networksecStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: paramsData.actionType == 'clone' ? undefined : networksec.id
      }
    }, {
      name: 'acl_no',
      label: 'ACL编号',
      fieldOptions: {
        initialValue: networksec.acl_no,
        rules: [
          // { required: true, whitespace: true, message: '请输入ACL编号' }
        ],
      },
      placeholder: '请输入ACL编号'
    }, {
      name: 'dep_locate',
      label: '部署位置',
      fieldOptions: {
        initialValue: networksec.dep_locate,
        rules: [
          // { required: true, whitespace: true, message: '请输入部署位置' }
        ],
      },
      placeholder: '请输入部署位置'
    }, {
      name: 'dep_purpose',
      label: '部署目的',
      fieldOptions: {
        initialValue: networksec.dep_purpose,
        rules: [
          // { required: true, whitespace: true, message: '请输入部署目的' }
        ],
      },
      placeholder: '请输入部署目的'
    }, {
      name: 'equipment',
      label: '所属设备',
      fieldOptions: {
        initialValue: networksec.equipment,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属设备' }
        ],
      },
      placeholder: '请输入所属设备'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: networksec.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作网络安全策略"
          visible={networksecStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={networksecStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
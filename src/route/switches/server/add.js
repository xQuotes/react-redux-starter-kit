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
  'serverStore'
  )
@observer
export default class AddServer extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, serverStore} = this.props
    const {validateFields} = form
    const {params} = serverStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(serverStore.params.ids))) {
        serverStore.putServers({
          ids: toJS(serverStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        serverStore.putServer(data)
      } else {
        serverStore.postServer(data)
      }
    })
  }
  hideModal() {
    const {serverStore} = this.props
    serverStore.toggleVisible()
  }

  render() {
    const {form, serverStore} = this.props
    const paramsData = serverStore.params
    const server = serverStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: paramsData.actionType == 'clone' ? undefined : server.id
      }
    }, {
      name: 'ser_no',
      label: 'SN号',
      fieldOptions: {
        initialValue: server.ser_no,
        rules: [
          // { required: true, whitespace: true, message: '请输入SN号' }
        ],
      },
      placeholder: '请输入SN号'
    }, {
      name: 'hostname',
      label: '主机名',
      fieldOptions: {
        initialValue: server.hostname,
        rules: [
          // { required: true, whitespace: true, message: '请输入主机名' },
        ],
      },
      placeholder: '请输入主机名'
    }, {
      name: 'ext_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: server.ext_ip,
        rules: [
          // { required: true, whitespace: true, message: '请输入公网IP' },
        ],
      },
      placeholder: '请输入公网IP'
    }, {
      name: 'int_ip',
      label: '内网IP',
      fieldOptions: {
        initialValue: server.int_ip,
        rules: [
          // { required: true, whitespace: true, message: '请输入内网IP' },
        ],
      },
      placeholder: '如：192.168.1.1'
    }, {
      name: 'man_card_ip',
      label: '管理卡IP',
      fieldOptions: {
        initialValue: server.man_card_ip,
        rules: [
          // { required: true, whitespace: true, message: '请输入管理卡IP' },
        ],
      },
      placeholder: '请输入管理卡IP'
    }, {
      name: 'brand',
      label: '服务器品牌',
      fieldOptions: {
        initialValue: server.brand,
        rules: [
          // { required: true, whitespace: true, message: '请输入服务器品牌' },
        ],
      },
      placeholder: '请输入服务器品牌'
    }, {
      name: 'category',
      label: '服务器类型',
      fieldOptions: {
        initialValue: server.category,
        rules: [
          // { required: true, whitespace: true, message: '请输入服务器类型' },
        ],
      },
      placeholder: '请输入服务器类型'
    }, {
      name: 'datacenter',
      label: '所属机房',
      fieldOptions: {
        initialValue: server.datacenter,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属机房' },
        ],
      },
      placeholder: '请输入所属机房'
    }, {
      name: 'area',
      label: '所属区域',
      fieldOptions: {
        initialValue: server.area,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属区域' },
        ],
      },
      placeholder: '请输入所属区域'
    }, {
      name: 'cabinet',
      label: '所属机柜',
      fieldOptions: {
        initialValue: server.cabinet,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属机柜' },
        ],
      },
      placeholder: '请输入所属机柜'
    }, {
      name: 'u_loc',
      label: 'U位',
      fieldOptions: {
        initialValue: server.u_loc,
        rules: [
          // { required: true, whitespace: true, message: '请输入U位' },
        ],
      },
      placeholder: '请输入U位'
    }, {
      name: 'acc_man',
      label: '大客户经理',
      fieldOptions: {
        initialValue: server.acc_man,
        rules: [
          // { required: true, whitespace: true, message: '请输入大客户经理' },
        ],
      },
      placeholder: '请输入大客户经理'
    }, {
      name: 'fix_phone',
      label: '保修电话',
      fieldOptions: {
        initialValue: server.fix_phone,
        rules: [
          // { required: true, whitespace: true, message: '请输入保修电话' },
        ],
      },
      placeholder: '请输入保修电话'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: server.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作服务器"
          visible={serverStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        <Form horizontal>
          <ModalForm form={form}
            store={serverStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
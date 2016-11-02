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

import {ipReg} from '../../../common/utils/regex'

import ModalForm from '../../components/form'

@Form.create()
@inject(
  'networkequipmentStore'
  )
@observer
export default class AddNetworkequipment extends React.Component {
  constructor(props) {
    super(props)
  }
  networkequipmentIpExists(rule, value, callback) {
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
  handleSubmit(e) {
    const {form, networkequipmentStore} = this.props
    const {validateFields} = form
    const {params} = networkequipmentStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(networkequipmentStore.params.ids))) {
        networkequipmentStore.putServers({
          ids: toJS(networkequipmentStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        networkequipmentStore.putServer(data)
      } else {
        networkequipmentStore.postServer(data)
      }
    })
  }
  hideModal() {
    const {networkequipmentStore} = this.props
    networkequipmentStore.toggleVisible()
  }

  render() {
    const {form, networkequipmentStore} = this.props
    const paramsData = networkequipmentStore.params
    const networkequipment = networkequipmentStore.list.getById(paramsData.id) || {}

    var formDataTitileServer = [{
      type: 'hidden',
      name: 'id',
      label: 'id',
      fieldOptions: {
        initialValue: paramsData.actionType == 'clone' ? undefined : networkequipment.id
      }
    }, {
      name: 'equ_name',
      label: '设备名称',
      fieldOptions: {
        initialValue: networkequipment.equ_name,
        rules: [
          // { required: true, whitespace: true, message: '请输入设备名称' }
        ],
      },
      placeholder: '请输入设备名称'
    }, {
      name: 'equ_ip',
      label: '公网IP',
      fieldOptions: {
        initialValue: networkequipment.equ_ip,
        rules: [
          // { required: true, whitespace: true, message: '请输入公网IP' },
          { validator: ::this.networkequipmentIpExists },
        ],
      },
      placeholder: '如：123.125.114.144'
    }, {
      name: 'ser_no',
      label: 'SN号',
      fieldOptions: {
        initialValue: networkequipment.ser_no,
        rules: [
          // { required: true, whitespace: true, message: '请输入SN号' }
        ],
      },
      placeholder: '请输入SN号',
    }, {
      name: 'area',
      label: '所属区域',
      fieldOptions: {
        initialValue: networkequipment.area,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属区域' }
        ],
      },
      placeholder: '请输入所属区域'
    }, {
      name: 'datacenter',
      label: '所属机房',
      fieldOptions: {
        initialValue: networkequipment.datacenter,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属机房' }
        ],
      },
      placeholder: '请输入所属机房'
    }, {
      name: 'cabinet',
      label: '所属机柜',
      fieldOptions: {
        initialValue: networkequipment.cabinet,
        rules: [
          // { required: true, whitespace: true, message: '请输入所属机柜' }
        ],
      },
      placeholder: '请输入所属机柜'
    }, {
      name: 'model',
      label: '设备型号',
      fieldOptions: {
        initialValue: networkequipment.model,
        rules: [
          // { required: true, whitespace: true, message: '请输入设备型号' }
        ],
      },
      placeholder: '请输入设备型号'
    }, {
      name: 'brand',
      label: '设备品牌',
      fieldOptions: {
        initialValue: networkequipment.brand,
        rules: [
          // { required: true, whitespace: true, message: '请输入设备品牌' }
        ],
      },
      placeholder: '请输入设备品牌'
    }, {
      name: 'category',
      label: '设备类型',
      fieldOptions: {
        initialValue: networkequipment.category,
        rules: [
          // { required: true, whitespace: true, message: '请输入设备类型' }
        ],
      },
      placeholder: '请输入设备类型'
    }, {
      name: 'cpu_nums',
      label: 'CPU数',
      fieldOptions: {
        initialValue: networkequipment.cpu_nums,
        rules: [
          // { required: true, whitespace: true, message: '请输入CPU数' }
        ],
      },
      placeholder: '请输入CPU数'
    }, {
      name: 'remark',
      label: '备注',
      fieldOptions: {
        initialValue: networkequipment.remark
      },
      placeholder: '请输入备注'
    }]

    return (
      <Modal title="操作网络设备"
          visible={networkequipmentStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        {!_.isEmpty(ids) && <div className="update-ids">
          批量修改的对象 ID 为：<span className="ids-span">{ids.join(',  ')}</span>，<br/>
          请修改对应的字段，不填写字段为不修改字段。
        </div>}
        <Form horizontal>
          <ModalForm form={form}
            store={networkequipmentStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
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
  'mappingStore'
  )
@observer
export default class AddMapping extends React.Component {
  constructor(props) {
    super(props)
  }
  mappingIpExists(rule, value, callback) {
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
  mappingPortExists(rule, value, callback) {
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
    const {form, mappingStore} = this.props
    const {validateFields} = form
    const {params} = mappingStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(mappingStore.params.ids))) {
        mappingStore.putServers({
          ids: toJS(mappingStore.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        mappingStore.putServer(data)
      } else {
        mappingStore.postServer(data)
      }
    })
  }
  hideModal() {
    const {mappingStore} = this.props
    mappingStore.toggleVisible()
  }

  render() {
    const {form, mappingStore} = this.props
    const paramsData = mappingStore.params
    const mapping = mappingStore.list.getById(paramsData.id) || {}

    const ids = toJS(paramsData.ids) || []

    let formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : mapping.id
        }
      }, {
        name: 'hostname',
        label: '主机名',
        fieldOptions: {
          initialValue: mapping.hostname,
          rules: [
            // // { required: true, whitespace: true, message: '请输入主机名' }
          ],
        },
        placeholder: '请输入主机名'
      }, {
        name: 'ext_ip',
        label: '公网IP',
        fieldOptions: {
          initialValue: mapping.ext_ip,
          rules: [
            // // { required: true, whitespace: true, message: '请输入公网IP' },
            { validator: ::this.mappingIpExists },
          ],
        },
        placeholder: '如：123.125.114.144'
      }, {
        name: 'ext_port',
        label: '公网端口',
        fieldOptions: {
          initialValue: mapping.ext_port,
          rules: [
            // // { required: true, whitespace: true, message: '请输入公网端口' },
            { validator: ::this.mappingPortExists },
          ],
        },
        placeholder: '如：80',
      }, {
        name: 'int_ip',
        label: '内网IP',
        fieldOptions: {
          initialValue: mapping.int_ip,
          rules: [
            // // { required: true, whitespace: true, message: '请输入内网IP' },
            { validator: ::this.mappingIpExists },
          ],
        },
        placeholder: '如：192.168.1.1'
      }, {
        name: 'int_port',
        label: '内网端口',
        fieldOptions: {
          initialValue: mapping.int_port,
          rules: [
            // // { required: true, whitespace: true, message: '请输入内网端口' },
            { validator: ::this.mappingPortExists },
          ],
        },
        placeholder: '如：80'
      }
    ]

    // let formDataTitileServer = _.map(mappingStore.updateFields, (v, k)=> {
    //   return {
    //     name: k,
    //     label: v,
    //     fieldOptions: {
    //       initialValue: searchDatas[k]
    //     },
    //     placeholder: `请输入${v}`
    //   }
    // })

    return (
      <Modal title="操作映射"
          visible={mappingStore.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        {!_.isEmpty(ids) && <div className="update-ids">
          批量修改的对象 ID 为：<span className="ids-span">{ids.join(',  ')}</span>，<br/>
          请修改对应的字段，不填写字段为不修改字段。
        </div>}
        <Form horizontal>
          <ModalForm form={form}
            store={mappingStore}
            title={formDataTitileServer}/>
        </Form>
      </Modal>)
  }
}
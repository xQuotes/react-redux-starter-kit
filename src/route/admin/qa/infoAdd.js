import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { history } from 'react-router'
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
import ReactQuill from '../../components/edit/index'

import { ipReg, portReg } from '../../../common/utils/regex'
import ModalForm from '../../components/form'

@Form.create()
@inject('QAStore')
@observer
export default class InfoAdd extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = e => {
    const { form, QAStore, item } = this.props
    const { validateFields } = form
    const { params } = QAStore

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!')
        return
      }
      //var data = _.pickBy(values)

      var data = values
      // form.resetFields()
      // this.hideModal()

      if (values.id) {
        QAStore.putServer({
          ...item,
          ...data
        })
      } else {
        QAStore.postServer(data)
      }
    })
  }
  hideModal = () => {
    const { QAStore } = this.props
    QAStore.toggleVisible()
  }

  render() {
    const { form, QAStore, item, history } = this.props

    const paramsData = QAStore.params
    const QA = QAStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(QAStore.updateFields, (v, k) => {
      if (k === 'answerContent') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return (
                <ReactQuill
                  value={QA[k]}
                  onChange={value => {
                    form.setFieldsValue({
                      answerContent: value
                    })
                  }}
                />
              )
            },
            fieldOptions: {
              initialValue: QA[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }
      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: QA[k],
            rules: [
              // { required: true, whitespace: true, message: '请输入主机名' }
            ]
          },
          placeholder: `请输入${v}`
        }
      )
    })
    formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : QA.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <Form horizontal>
        <ModalForm
          form={form}
          store={QAStore}
          title={formDataTitileServer}
          item={item}
        />
        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button
            onClick={() => {
              history.goBack()
            }}
          >
            返回
          </Button>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}

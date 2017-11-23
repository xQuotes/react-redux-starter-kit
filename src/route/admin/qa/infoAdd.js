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
  componentWillMount() {
    const { QAStore, params: { id } } = this.props
    QAStore.getServer({
      id
    })
  }
  hideModal = () => {
    const { QAStore } = this.props
    QAStore.toggleVisible()
  }

  render() {
    const { form, QAStore, history, location: { query: { type } } } = this.props
    console.log(this.props)
    const { item } = QAStore
    console.log(item)
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
                  value={item && item[k]}
                  onChange={value => {
                    form.setFieldsValue({
                      answerContent: value
                    })
                  }}
                />
              )
            },
            fieldOptions: {
              initialValue: item && item[k],
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
            initialValue: item[k],
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
          initialValue: type == 'clone' ? undefined : item.id
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

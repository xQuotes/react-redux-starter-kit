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

import { ipReg, portReg } from '../../../common/utils/regex'

import ModalForm from '../form'

@Form.create()
@observer
export default class AddForm extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = e => {
    const { form, store, item } = this.props
    const { validateFields } = form
    const { params } = store

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!')
        return
      }

      if (values['presetValue']) {
        values['presetValue'] = JSON.stringify(values['presetValue'])
      }

      //var data = _.pickBy(values)

      var data = values
      form.resetFields()
      this.hideModal()

      if (!_.isEmpty(toJS(store.params.ids))) {
        store.putServers({
          ids: toJS(store.params.ids),
          data: _.pickBy(values)
        })
      } else if (values.id) {
        store.putServer({
          ...item,
          ...data
        })
      } else {
        store.postServer(data)
      }
    })
  }
  hideModal = () => {
    const { store } = this.props
    store.toggleVisible()
  }

  render() {
    const { form, store, title, item, history } = this.props
    const ids = toJS(store.params.ids) || []

    return (
      <Form horizontal>
        <ModalForm form={form} store={store} title={title} item={item} />
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

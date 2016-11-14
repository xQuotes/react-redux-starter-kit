import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'
import {
  Form,
  Modal
} from 'antd'

import {ipReg, portReg} from '../../../common/utils/regex'

import ModalForm from '../form'

@Form.create()
@observer
export default class AddForm extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    const {form, store} = this.props
    const {validateFields} = form
    const {params} = store

    validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      //var data = _.pickBy(values)
      var data = values

      form.resetFields()
      this.hideModal()

      if(!_.isEmpty(toJS(store.params.ids))) {
        store.putServers({
          ids: toJS(store.params.ids),
          data: _.pickBy(values)
        })
      } else if(values.id) {
        store.putServer(data)
      } else {
        store.postServer(data)
      }
    })
  }
  hideModal() {
    const {store} = this.props
    store.toggleVisible()
  }

  render() {
    const {form, store, title} = this.props
    const ids = toJS(store.params.ids) || []

    return (
      <Modal title="操作映射"
          visible={store.visible}
          onCancel={::this.hideModal}
          onOk={::this.handleSubmit}>
        {!_.isEmpty(ids) && <div className="update-ids">
          批量修改的对象 ID 为：<span className="ids-span">{ids.join(',  ')}</span>，<br/>
          请修改对应的字段，不填写字段为不修改字段。
        </div>}
        <Form horizontal>
          <ModalForm form={form}
            store={store}
            title={title}/>
        </Form>
      </Modal>)
  }
}
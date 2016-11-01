import moment from 'moment'
import {
  Form, Input, Row, Col, Button,
  DatePicker
} from 'antd'
const FormItem = Form.Item

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    form: React.PropTypes.object,
    store: React.PropTypes.object,
    title: React.PropTypes.array
  }
  componentDidMount() {
    const { store } = this.props
    store.getServers(store.searchDatas)
  }
  render() {
    const {form, store, title} = this.props
    const {getFieldDecorator} = form

    const searchDataTitile = _.map(title, (value, key) => {
     return _.assign({
        formType: 'Input',
        name: '',
        label: '',
        type: 'text',
        sm: 4,
        labelCol: 6,
        wrapperCol: 18,
        fieldOptions: {
          initialValue: ''
        },
        placeholder: ''
      }, value)
    })

    function formJsxType(formType, placeholder) {
      if(formType == 'DatePicker') {
        return <DatePicker />
      } else {
        return <Input autoCapitalize="off"
          placeholder={placeholder}
          size="default"/> 
      }
    }

    return(
      <div>
          {_.map(searchDataTitile, (v, key)=> {
            return <FormItem
              hasFeedback
              style={{
                display: v.type == 'hidden' ? 'none' : 'block'
              }}
              key={key}
              label={v.label}
              labelCol={{ span: v.labelCol }}
              wrapperCol={{ span: v.wrapperCol }}>
              {getFieldDecorator(v.name, v.fieldOptions)(
                formJsxType(v.formType, v.placeholder)
              )}
            </FormItem>
          })}
      </div>
      )
  }
}


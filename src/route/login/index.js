import {
  inject, observer
} from 'mobx-react'
import {
  Button, Form, Input
} from 'antd'
const createForm = Form.create
const FormItem = Form.Item

// import './login.less'

@createForm()
@inject("userStore") @observer
export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  handleReset(e) {
    e.preventDefault()
    this.props.form.resetFields()
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userStore, form } = this.props

    form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!')
        return;
      }
      userStore.loginServer(values)
    })
  }
  render() {
    const {
      getFieldDecorator, getFieldError, isFieldValidating
    } = this.props.form
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    }
    return(
      <div
        className="login">
        <Form horizontal>
          <FormItem
            {...formItemLayout}
            label="User name"
            hasFeedback
            help={isFieldValidating('username') ? 'validating...' : (getFieldError('name') || []).join(', ')}
          >
            {getFieldDecorator('username', {
              rules: [
                { required: true, min: 5, message: 'User name for at least 5 characters' }
              ],
            })(
              <Input placeholder="Realtime validation, try to input Jason Wood" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Password"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, whitespace: true, message: 'Please enter your password' }
              ],
            })(
              <Input type="password" autoComplete="off"
              />
            )}
          </FormItem>

          <FormItem wrapperCol={{ span: 12, offset: 7 }}>
            <Button type="primary" onClick={::this.handleSubmit}>OK</Button>
            &nbsp;&nbsp;&nbsp;
            <Button type="ghost" onClick={::this.handleReset}>Reset</Button>
          </FormItem>
        </Form>
      </div>
      )
  }
}
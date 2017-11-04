import { inject, observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router'
const FormItem = Form.Item

import './login.less'

@inject('myStore')
@observer
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { myStore, form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        myStore.login({
          ...values
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="index">
        <div className="login">
          <h3>登 录</h3>
          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: '请输入账号！' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="请输入账号！"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入您的密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="请输入密码！"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住账号</Checkbox>)}
              <Link className="login-form-forgot" to={`forgetPassword`}>
                忘记密码
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
              >
                登 录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)

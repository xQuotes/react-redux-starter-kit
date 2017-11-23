import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import './login.less'

@inject('myStore')
@observer
class Login extends React.Component<any & FormComponentProps, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    const { myStore, form } = this.props
    form.validateFields((err: any, values: any) => {
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
        <Header {...this.props} />
        <div className="login">
          <h3>登 录</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
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
              <Link className="login-form-forgot" to={`findPassword`}>
                忘记密码
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登 录
              </Button>
              或 <Link to={`register`}>立即注册!</Link>
            </FormItem>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Form.create()(Login)

import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import Urls from '../../common/url'

import './login.less'

@inject('myStore')
@observer
class Login extends React.Component<any & FormComponentProps, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    const { myStore, form, history } = this.props
    form.validateFields((err: any, values: any) => {
      if (!err) {
        myStore.login({
          ...values
        }).then((data: any) => {
          if (data.code > 0) {
            form.resetFields()
            history.push(Urls.index)
          }
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="index">
        <Header {...this.props} />
        <div className="login-main" style={{
          backgroundImage: `url(${require('../../common/images/注册/图层1.png')})`
        }}>
          <div className="login">
            <h3>登 录</h3>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '请输入账号！' }]
                })(
                  <Input
                    className="input-style"
                    prefix={<span className="login-user-icon" />}
                    placeholder="请输入账号！"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入您的密码!' }]
                })(
                  <Input
                    className="input-style"
                    prefix={<span className="login-pass-icon" />}
                    type="password"
                    placeholder="请输入密码！"
                  />
                )}
              </FormItem>
              <FormItem>
                <div style={{
                  width: '300px',
                  margin: '0 auto',
                  textAlign: 'left'
                }}>{getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>记住账号</Checkbox>)}
                  <Link className="login-form-forgot" to={`findPassword`}>
                    忘记密码
                </Link></div>
                <div style={{ textAlign: 'center' }}><Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button input-style"
                  style={{
                    width: '150px',
                    borderRadius: '24px'
                  }}
                >
                  登 录
                </Button></div>
                <div style={{ textAlign: 'center' }}><Link to={`register`}>立即注册!</Link></div>
              </FormItem>
            </Form>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}

export default Form.create()(Login)

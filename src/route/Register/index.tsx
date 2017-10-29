import * as React from 'react'
import { Form, Icon, Input, Button, Tooltip, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
const Option = Select.Option
import { Link } from 'react-router-dom'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import '../Login/login.less'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
}

class Register extends React.Component<any & FormComponentProps, {}> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  handleConfirmBlur = (e: any) => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  checkConfirm = (rule: any, value: any, callback: any) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  checkPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
      </Select>
    )
    return (
      <div className="index">
        <Header {...this.props} />
        <div className="login register">
          <h3>注册</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem {...formItemLayout} label="E-mail" hasFeedback={true}>
              {getFieldDecorator('邮箱', {
                rules: [
                  {
                    type: 'email',
                    message: '请输入正确的邮箱!'
                  },
                  {
                    required: true,
                    message: '请输入你的邮箱!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="密码" hasFeedback={true}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!'
                  },
                  {
                    validator: this.checkConfirm
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="确认密码" hasFeedback={true}>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: '请再次输入密码!'
                  },
                  {
                    validator: this.checkPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  昵称
                  <Tooltip title="请输入昵称?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
              hasFeedback={true}
            >
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: '请输入你昵称!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="手机号">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入你的手机号!' }]
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                注 册
              </Button>
              或 已有账号， <Link to={`login`}>立即登录!</Link>
            </FormItem>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Form.create()(Register)

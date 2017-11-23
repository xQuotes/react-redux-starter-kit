import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button, Row, Col } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import { Link } from 'react-router-dom'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import './login.less'

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

@inject('myStore')
@observer
class FindPassword extends React.Component<any & FormComponentProps, {}> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }
  handleSubmit = (e: any) => {
    e.preventDefault()
    const { myStore, form } = this.props
    form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        myStore.register({
          ...values
        })
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
  getPhoneCode = (phone: string) => () => {
    const { myStore } = this.props
    myStore.getCode({
      phone
    })
  }
  render() {
    const { form } = this.props
    const { getFieldDecorator, getFieldValue } = form

    return (
      <div className="index">
        <Header {...this.props} />
        <div className="login register">
          <h3>注册</h3>
          <Form className="login-form">
            <FormItem {...formItemLayout} label="手机号" extra="">
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('mobile', {
                    rules: [
                      {
                        required: true,
                        message: '请输入手机号!'
                      }
                    ]
                  })(<Input size="large" />)}
                </Col>
                <Col span={12}>
                  <Button
                    size="large"
                    onClick={this.getPhoneCode(getFieldValue('mobile'))}
                  >
                    获取验证码
                  </Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem {...formItemLayout} label="验证码" hasFeedback={true}>
              {getFieldDecorator('smscode', {
                rules: [
                  {
                    required: true,
                    message: '请输入验证码!'
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
            <FormItem {...formItemLayout} label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
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

export default Form.create()(FindPassword)

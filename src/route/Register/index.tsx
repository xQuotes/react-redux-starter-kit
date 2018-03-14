import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Icon, Input, Button, Tooltip, Row, Col } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
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

@inject('myStore')
@observer
class Register extends React.Component<any & FormComponentProps, {}> {
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
        <div className="login-main" style={{
          backgroundImage: `url(${require('../../common/images/注册/图层1.png')})`
        }}>
          <div className="login register">
            <h3>注册</h3>
            <Form className="login-form">
              <FormItem {...formItemLayout} label="手机号" extra="">
                {getFieldDecorator('mobile', {
                  rules: [
                    {
                      required: true,
                      message: '请输入手机号!'
                    }
                  ]
                })(<Input size="large"
                  className="input-style" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="验证码" >
                <Row gutter={8}>
                  <Col span={16}>
                    {getFieldDecorator('smscode', {
                      rules: [
                        {
                          required: true,
                          message: '请输入验证码!'
                        }
                      ]
                    })(<Input
                      className="input-style"
                      style={{
                        width: '100%'
                      }} />)}
                  </Col>
                  <Col span={8}>
                    <Button
                      size="large"
                      type="primary" ghost
                      onClick={this.getPhoneCode(getFieldValue('mobile'))}
                      style={{
                        width: '120px',
                        height: '48px',
                        borderRadius: '12px'
                      }}
                    >
                      获取验证码
                  </Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem {...formItemLayout} label="密码" >
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
                })(<Input type="password"
                  className="input-style" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="确认密码" >
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
                })(<Input type="password" onBlur={this.handleConfirmBlur}
                  className="input-style" />)}
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
              >
                {getFieldDecorator('nickname', {
                  rules: [
                    {
                      required: true,
                      message: '请输入你昵称!',
                      whitespace: true
                    }
                  ]
                })(<Input
                  className="input-style" />)}
              </FormItem>
              <FormItem {...formItemLayout} label=" " colon={false}>
                <div style={{ textAlign: 'center' }}><Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit}
                  className="login-form-button input-style"
                  style={{
                    width: '150px',
                    borderRadius: '24px'
                  }}
                >
                  注 册
              </Button>
                </div>
                <div style={{ textAlign: 'center' }}>  已有账号， <Link to={`login`}>立即登录!</Link>
                </div>
              </FormItem>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Form.create()(Register)

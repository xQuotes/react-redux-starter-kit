import {
  inject, observer
} from 'mobx-react'
import {
  Button, Form, Input
} from 'antd'
const createForm = Form.create
const FormItem = Form.Item

import './register.less'

@createForm()
@inject("userStore") @observer
export default class Register extends React.Component {
  constructor(props) {
    super(props)
  }
  handleReset(e) {
    e.preventDefault()
    this.props.form.resetFields()
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userStore } = this.props

    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!')
        return;
      }
      console.log('Submit!!!')
      console.log(userStore.registerServer)
      console.log(values)
      delete values[rePassword]
      console.log(userStore.registerServer(values))
      console.log(this.props)
    });
  }

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'Jason Wood') {
          callback([new Error('Sorry, the user name is already in use.')]);
        } else {
          callback();
        }
      }, 800);
    }
  }

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePassword'], { force: true });
    }
    callback();
  }

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('password')) {
      callback('The two passwords you enter are inconsistent!');
    } else {
      callback();
    }
  }
  render() {
    const {
      getFieldDecorator, getFieldError, isFieldValidating
    } = this.props.form
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (<div className="register">
      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="User name"
          hasFeedback
          help={isFieldValidating('username') ? 'validating...' : (getFieldError('name') || []).join(', ')}
        >
          {getFieldDecorator('username', {
            rules: [
              { required: true, min: 5, message: 'User name for at least 5 characters' },
              { validator: ::this.userExists },
            ],
          })(
            <Input placeholder="Realtime validation, try to input Jason Wood" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Email"
          hasFeedback
        >
          {getFieldDecorator('email', {
            validate: [{
              rules: [
                { required: true },
              ],
              trigger: 'onBlur',
            }, {
              rules: [
                { type: 'email', message: 'Please input the correct email' },
              ],
              trigger: ['onBlur', 'onChange'],
            }],
          })(
            <Input type="email" placeholder="This control uses onBlur and onChange" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [
              { required: true, whitespace: true, message: 'Please enter your password' },
              { validator: ::this.checkPass },
            ],
          })(
            <Input type="password" autoComplete="off"
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Confirm password"
          hasFeedback
        >
          {getFieldDecorator('rePassword', {
            rules: [{
              required: true,
              whitespace: true,
              message: 'Please confirm your password',
            }, {
              validator: ::this.checkPass2,
            }],
          })(
            <Input type="password" autoComplete="off" placeholder="password"
            />
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={::this.handleSubmit}>OK</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={::this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    </div>)
  }
}
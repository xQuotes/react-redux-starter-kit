import React from 'react'
import { Form, Input, Button, Col } from 'antd'
const FormItem = Form.Item
import { FormComponentProps } from 'antd/lib/form'

interface UserFormProps extends FormComponentProps {
  age?: number;
  name?: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

class UserForm extends React.Component<UserFormProps, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Col className="form-title">
          职业信息
        </Col>
        <FormItem
          {...formItemLayout}
          label="账号"
        >
          {getFieldDecorator('email', {
            rules: [],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="昵称"
        >
          {getFieldDecorator('email', {
            rules: [],
          })(
            <Input />
          )}
        </FormItem>
        <Col className="form-title">
          公司信息
        </Col>
        <FormItem
          {...formItemLayout}
          label="公司名称"
        >
          {getFieldDecorator('email', {
            rules: [],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="公司"
        >
          {getFieldDecorator('email', {
            rules: [],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="岗位"
        >
          {getFieldDecorator('email', {
            rules: [],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button className="submit-btn" type="primary" htmlType="submit">保存修改</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(UserForm)
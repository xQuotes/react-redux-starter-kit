import * as React from 'react'
import { Form, Input, Checkbox } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item

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

class ResultForm extends React.Component<any & FormComponentProps, any> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem colon={false} {...formItemLayout} label="计算器1">
          {getFieldDecorator('email', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label="计算器2">
          {getFieldDecorator('name', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label="计算器1">
          {getFieldDecorator('email', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label="计算器2">
          {getFieldDecorator('name', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label="计算器1">
          {getFieldDecorator('email', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label="计算器2">
          {getFieldDecorator('name', {})(<Input />)}
        </FormItem>
        <FormItem colon={false} {...formItemLayout} label=" ">
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(<Checkbox>是否生成报告(勾选之后可批量生成报告)</Checkbox>)}
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(ResultForm)

import * as React from 'react'
import { Row, Col, Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import Echarts from '../../../components/Echarts/'

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

class Standard extends React.Component<any & FormComponentProps, any> {
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
      <Row className="standard">
        <Col span={12}>
          <Echarts />
        </Col>
        <Col span={12}>
          <h3>您已选择： 新疆</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormItem colon={false} {...formItemLayout} label="计算器1">
              {getFieldDecorator('email', {})(<Input />)}
            </FormItem>
            <FormItem colon={false} {...formItemLayout} label="计算器2">
              {getFieldDecorator('name', {})(<Input />)}
            </FormItem>
            <FormItem colon={false} {...formItemLayout} label=" ">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                计算结果
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Form.create()(Standard)

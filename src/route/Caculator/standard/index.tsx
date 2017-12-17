import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import Echarts from '../../../components/Echarts/'
import CaculatorModal from '../model'

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

@inject('caculatorStore')
@observer
class Standard extends React.Component<any & FormComponentProps, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { caculatorStore, form } = this.props
    const { item, presetValue, presetVisible, presetItemKey } = caculatorStore
    const { getFieldDecorator } = form

    return (
      <Row className="standard">
        <Col span={14}>
          <Echarts
            style={{
              width: '550px',
              height: '550px'
            }}
          />
        </Col>
        <Col span={10}>
          <h3>您已选择： 新疆</h3>
          <Form onSubmit={this.handleSubmit}>
            {item.map((val: any, key: string) => {
              return (
                <FormItem
                  key={val.id}
                  colon={false}
                  {...formItemLayout}
                  label={val.item}
                >
                  <div>
                    {getFieldDecorator(val.itemKey, {
                      initialValue: val.defaultValue
                    })(<Input addonAfter={val.unit === '无' ? '' : val.unit} />)}
                    {val.contentType === 'select' ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          caculatorStore.presetItemKey = val.itemKey
                          caculatorStore.presetValue = JSON.parse(
                            val.presetValue
                          )
                          caculatorStore.presetVisible = true
                        }}
                      >
                        点击选择
                      </Button>
                    ) : (
                      ''
                    )}
                  </div>
                </FormItem>
              )
            })}
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
          {presetVisible && (
            <CaculatorModal
              presetValue={presetValue}
              onChange={(val: any) => {
                form.setFieldsValue({
                  [presetItemKey]: val
                })
              }}
            />
          )}
        </Col>
      </Row>
    )
  }
}

export default Form.create()(Standard)

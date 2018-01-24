import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Button, Form, Input, Select } from 'antd'
const Option = Select.Option
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item
import Echarts from '../../../components/Echarts/'
import CaculatorModal from '../model'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 }
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

        const { caculatorStore } = this.props

        caculatorStore.getResults({
          ...values,
          calculatorType: caculatorStore.itemType
        })
      }
    })
  }
  onChange = (v: any) => {
    const { form, caculatorStore } = this.props
    form.setFieldsValue({
      [caculatorStore.presetItemKey]: v.value
    })
  }
  render() {
    const { caculatorStore, form } = this.props
    const { item, selectMapItem, results, projects } = caculatorStore
    const { getFieldDecorator } = form

    return (
      <Row className="standard">
        <Col span={14}>
          <Echarts
            style={{
              width: '550px',
              height: '550px'
            }}
            store={caculatorStore}
          />
        </Col>
        <Col span={9} offset={1}>
          <h3>您已选择： {selectMapItem.name}</h3>
          {projects.length > 0 && (
            <FormItem colon={false} {...formItemLayout} label={'咨询项目'}>
              <Select
                onChange={id => {
                  caculatorStore.setSelectMapItem(
                    caculatorStore.selectMapItem,
                    caculatorStore.itemType,
                    id
                  )
                }}
                defaultValue={projects[0].id}
                style={{
                  width: '100%'
                }}
              >
                {projects.map((v: any, k: any) => {
                  return (
                    <Option value={v.id} key={k}>{`${v.formulaName}`}</Option>
                  )
                })}
              </Select>
            </FormItem>
          )}
          <Form onSubmit={this.handleSubmit}>
            {item
              .filter((v: any) => v.tableType === 1)
              .map((val: any, key: string) => {
                const addonAfter = () => {
                  return val.contentType === 'select' ? (
                    <Button
                      type="primary"
                      onClick={() => {
                        caculatorStore.presetItemKey = val.itemKey
                        caculatorStore.presetValue = JSON.parse(val.presetValue)
                        caculatorStore.presetVisible = true
                      }}
                    >
                      点击选择
                    </Button>
                  ) : val.unit === '无' ? (
                    ''
                  ) : (
                    val.unit
                  )
                }

                return (
                  <FormItem
                    key={key}
                    colon={false}
                    {...formItemLayout}
                    label={val.item}
                  >
                    <div>
                      {getFieldDecorator(val.itemKey, {
                        initialValue:
                          val.defaultValue === '无' ? '' : val.defaultValue
                      })(
                        val.contentType === 'drop_down_select' ? (
                          <Select>
                            {JSON.parse(
                              val.presetValue
                            ).list.map((v: any, k: any) => {
                              return (
                                <Option value={v.title} key={k}>
                                  {v.title}
                                </Option>
                              )
                            })}
                          </Select>
                        ) : (
                          <Input addonAfter={addonAfter()} />
                        )
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
          <div>
            {item
              .filter((v: any) => v.tableType === 2)
              .map((val: any, key: string) => {
                return (
                  <FormItem
                    key={key}
                    colon={false}
                    {...formItemLayout}
                    label={val.item}
                  >
                    <div>
                      {getFieldDecorator(val.itemKey, {
                        initialValue: results[val.itemKey]
                      })(
                        <Input addonAfter={val.unit === '无' ? '' : val.unit} />
                      )}

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
          </div>
        </Col>
        <CaculatorModal onChange={this.onChange} />
      </Row>
    )
  }
}

export default Form.create()(Standard)

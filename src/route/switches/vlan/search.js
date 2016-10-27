import {
  inject, observer
} from 'mobx-react'
import moment from 'moment'
import {
  Form, Input, Row, Col, Button,
  DatePicker
} from 'antd'
const FormItem = Form.Item

@Form.create()
@inject('vlanStore') @observer
export default class SearchTable extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const {form, vlanStore} = this.props
    form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      
      var searchData = _.pickBy(values)

      vlanStore.getVlansServer(searchData)
    })
  }
  componentDidMount() {
    const { vlanStore } = this.props
    vlanStore.getVlansServer(vlanStore.searchDatas)
  }
  handleReset(e) {
    e.preventDefault()
    const {form, vlanStore} = this.props
    form.resetFields()
    vlanStore.setSearchDatas({})
  }
  render() {
    const {form, vlanStore} = this.props
    const {
      getFieldDecorator, getFieldError, isFieldValidating,
      setFieldsValue
    } = form
    const {
      searchDatas
    } = vlanStore

    return(
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={5}>
          <Col sm={4}>
            <FormItem
              label="主机名"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('hostname', {
                initialValue: searchDatas.hostname
              })(
                <Input autoCapitalize="off" placeholder="请输入搜索主机名" size="default"/>
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="交换机IP"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('switchIp', {
                initialValue: searchDatas.switchIp
              })(
                <Input autoCapitalize="off" placeholder="请输入搜索IP" size="default" />
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="MAC地址"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('mac', {
                initialValue: searchDatas.mac
              })(
                <Input autoCapitalize="off" placeholder="请输入搜索品牌" size="default"/>
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="服务器IP"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('serverIp', {
                initialValue: searchDatas.serverIp
              })(
                <Input name="serverIp" autoCapitalize="off" placeholder="请输入搜索SN" size="default" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={::this.handleSubmit}>搜索</Button>
            <Button onClick={::this.handleReset}>清除条件</Button>
          </Col>
        </Row>
      </Form>
      )
  }
}

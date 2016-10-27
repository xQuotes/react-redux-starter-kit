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
@inject('backupStore') @observer
export default class SearchTable extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const {form, backupStore} = this.props
    form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      // DatePicker 插件获取数据格式 为 moment
      values['day'] = values['day'] && values['day'].format('YYYY-MM-DD')
      var searchData = _.pickBy(values)

      backupStore.getBackupsServer(searchData)
    })
  }
  componentDidMount() {
    const { backupStore } = this.props
    backupStore.getBackupsServer(backupStore.searchDatas)
  }
  handleReset(e) {
    e.preventDefault()
    const {form, backupStore} = this.props
    form.resetFields()
    backupStore.setSearchDatas({})
  }
  render() {
    const {form, backupStore} = this.props
    const {
      getFieldDecorator, getFieldError, isFieldValidating,
      setFieldsValue
    } = form
    const {
      searchDatas
    } = backupStore

    return(
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={5}>
          <Col sm={4}>
            <FormItem
              label="主机名"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('name', {
                initialValue: searchDatas.name
              })(
                <Input name="name" autoCapitalize="off" placeholder="请输入搜索主机名" size="default"/>
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="IP"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('host', {
                initialValue: searchDatas.host
              })(
                <Input name="host" autoCapitalize="off" placeholder="请输入搜索IP" size="default" />
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="品牌"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('brand', {
                initialValue: searchDatas.brand
              })(
                <Input name="brand" autoCapitalize="off" placeholder="请输入搜索品牌" size="default"/>
              )}
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="SN"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('sn', {
                initialValue: searchDatas.sn
              })(
                <Input name="sn" autoCapitalize="off" placeholder="请输入搜索SN" size="default" />
              )}
            </FormItem>
          </Col>
          <Col sm={5}>
            <FormItem
              label="日期"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              {getFieldDecorator('day', {
                initialValue: moment(searchDatas.day) || moment(new Date())
              })(
                <DatePicker onChange={function(dates, dateStrings) {
                  setFieldsValue({
                    'day': dateStrings
                  })
                }} />
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
